import React, { useState } from 'react';
import { useImages } from '../context/ImageContext';
import { Lock, LogOut, Settings, Save } from 'lucide-react';

const AdminControl: React.FC = () => {
  const { isEditMode, toggleEditMode, logout, exportConfig } = useImages();
  const [isOpen, setIsOpen] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (toggleEditMode(password)) {
      setIsOpen(false);
      setPassword('');
      setError(false);
    } else {
      setError(true);
    }
  };

  if (isEditMode) {
    return (
      <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
        {/* Save/Export Button */}
        <button 
          onClick={exportConfig}
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors group flex items-center gap-0 hover:gap-2 hover:px-4 duration-300 overflow-hidden"
          title="Save Changes (Download Config)"
        >
          <Save size={20} />
          <span className="w-0 overflow-hidden group-hover:w-auto transition-all whitespace-nowrap text-sm font-medium">Save Changes</span>
        </button>

        {/* Logout Button */}
        <button 
          onClick={logout}
          className="bg-slate-900 text-white p-3 rounded-full shadow-lg hover:bg-red-600 transition-colors group flex items-center gap-0 hover:gap-2 hover:px-4 duration-300 overflow-hidden"
          title="Exit Edit Mode"
        >
          <LogOut size={20} />
          <span className="w-0 overflow-hidden group-hover:w-auto transition-all whitespace-nowrap text-sm font-medium">Exit Edit Mode</span>
        </button>
      </div>
    );
  }

  return (
    <>
      {/* Trigger Button */}
      <div className="fixed bottom-6 left-6 z-50 opacity-20 hover:opacity-100 transition-opacity">
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-white text-slate-400 p-2 rounded-full shadow-sm hover:text-slate-900 hover:shadow-md transition-all"
        >
          <Settings size={16} />
        </button>
      </div>

      {/* Login Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-sm relative">
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
            >
              ✕
            </button>
            
            <div className="flex flex-col items-center mb-6">
              <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-3">
                <Lock className="text-slate-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Admin Access</h3>
              <p className="text-sm text-slate-500">Enter password to edit images.</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password (try 'admin')"
                  className={`w-full px-4 py-3 rounded-xl border ${error ? 'border-red-500 bg-red-50' : 'border-slate-200 focus:border-blue-500'} outline-none transition-colors`}
                  autoFocus
                />
                {error && <p className="text-red-500 text-xs mt-1 ml-1">Incorrect password</p>}
              </div>
              
              <button 
                type="submit"
                className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold py-3 rounded-xl transition-colors shadow-lg shadow-green-500/20"
              >
                Unlock Edit Mode
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminControl;