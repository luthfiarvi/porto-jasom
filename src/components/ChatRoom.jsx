import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";

export default function ChatRoom() {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
    };
    getSession();

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    fetchMessages();

    const channel = supabase
      .channel('public:messages')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'messages' }, (payload) => {
        setMessages((prev) => [...prev, payload.new]);
      })
      .subscribe();

    return () => {
      authListener.subscription.unsubscribe();
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchMessages = async () => {
    const { data } = await supabase.from('messages').select('*').order('created_at', { ascending: true });
    if (data) setMessages(data);
  };

  const login = async () => {
    await supabase.auth.signInWithOAuth({ provider: 'google' });
  };

  const logout = async () => {
    await supabase.auth.signOut();
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!message.trim() || !user) return;

    const { error } = await supabase.from('messages').insert([
      { 
        text: message, 
        user_id: user.id, 
        user_name: user.user_metadata.full_name, 
        user_avatar: user.user_metadata.avatar_url || user.user_metadata.picture 
      }
    ]);

    if (error) {
      console.error("Gagal mengirim pesan:", error.message);
    } else {
      setMessage("");
    }
  };

  return (
    <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl shadow-xl">
      <h2 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
        Live Community Chat
      </h2>

      {/* Tampilan User (Header) */}
      {user && (
        <div className="flex justify-between items-center mb-4 bg-zinc-800/50 p-3 rounded-xl border border-zinc-700">
          <div className="flex items-center gap-3">
            <img 
              src={user?.user_metadata?.avatar_url || user?.user_metadata?.picture} 
              referrerPolicy="no-referrer"
              className="w-8 h-8 rounded-full border border-zinc-600 object-cover" 
              alt="avatar" 
              onError={(e) => { e.target.src = "https://ui-avatars.com/api/?name=" + user?.user_metadata?.full_name }}
            />
            <span className="text-sm font-semibold text-white">
              {user?.user_metadata?.full_name}
            </span>
          </div>
          <button 
            onClick={logout} 
            className="text-xs text-red-400 hover:text-red-300 transition-colors"
          >
            Logout
          </button>
        </div>
      )}

      {/* Area Chat */}
      <div className="h-64 overflow-y-auto mb-4 space-y-3 pr-2 no-scrollbar">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex gap-2 ${msg.user_id === user?.id ? "flex-row-reverse" : "flex-row"}`}>
            <img 
              src={msg.user_avatar || "https://via.placeholder.com/150"} 
              referrerPolicy="no-referrer"
              className="w-8 h-8 rounded-full border border-zinc-700 object-cover flex-shrink-0" 
              alt="avatar" 
            />
            <div className={`max-w-[80%] p-3 rounded-2xl ${msg.user_id === user?.id ? "bg-blue-600 text-white rounded-tr-none" : "bg-zinc-800 text-zinc-200 rounded-tl-none"}`}>
              <p className="text-[10px] opacity-60 mb-1">{msg.user_name}</p>
              <p className="text-sm">{msg.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Input atau Login */}
      {user ? (
        <form onSubmit={sendMessage} className="flex gap-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
          />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm hover:bg-blue-500 transition-colors">Send</button>
        </form>
      ) : (
        <button onClick={login} className="w-full bg-white text-black font-semibold py-3 rounded-xl hover:bg-zinc-200 transition-all flex items-center justify-center gap-2">
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" className="w-5" alt="G" />
          Sign in with Google to Chat
        </button>
      )}
    </div>
  );
}