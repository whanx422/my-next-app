
import { FileText, Users, Folder, CreditCard, Settings } from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: FileText, label: 'Document Editor', active: true },
    { icon: Users, label: 'Engagements', active: false },
    { icon: Folder, label: 'My Files', active: false }
  ];

  const bottomItems = [
    { icon: CreditCard, label: 'Free Plan' },
    { icon: Settings, label: 'Settings' }
  ];

  return (
    <div className="w-72 bg-white border-r border-gray-200 h-screen flex flex-col">
      {/* Navigation Items */}
      <div className="flex-1 py-6">
        <nav className="space-y-1 px-4">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={index}
                className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  item.active
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon className="w-4 h-4 mr-3" />
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Bottom Items */}
      <div className="border-t border-gray-200 p-4 space-y-1">
        {bottomItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <button
              key={index}
              className="w-full flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Icon className="w-4 h-4 mr-3" />
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;