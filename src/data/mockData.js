export const navItems = [
  { name: 'Dashboard', path: '/app/dashboard', icon: 'LayoutDashboard' },
  { name: 'Energy Monitoring', path: '/app/energy', icon: 'Zap' },
  { name: 'Sensor Monitoring', path: '/app/sensors', icon: 'Radar' },
  { name: 'Device Control', path: '/app/devices', icon: 'Monitor' },
  { name: 'Analytics / Reports', path: '/app/analytics', icon: 'BarChart3' },
  { name: 'Users', path: '/app/users', icon: 'UsersRound' },
  { name: 'System Settings', path: '/app/settings', icon: 'Settings' },
  { name: 'Help / Support', path: '/app/help', icon: 'CircleHelp' }
];

export const dashboardStats = [
  { title: 'Total Energy Today', value: '120 kWh', note: '+12% from yesterday', tone: 'blue' },
  { title: 'Current Occupancy', value: '6', note: 'People detected', tone: 'green' },
  { title: 'Active Devices', value: '8', note: '2 devices idle', tone: 'purple' },
  { title: 'System Status', value: 'Running', note: 'All systems operational', tone: 'mint' }
];

export const realtimeEnergy = [
  { time: '00:00', energy: 45 },
  { time: '04:00', energy: 32 },
  { time: '08:00', energy: 78 },
  { time: '12:00', energy: 95 },
  { time: '16:00', energy: 112 },
  { time: '20:00', energy: 88 },
  { time: '23:59', energy: 68 }
];

export const occupancyTrend = [
  { time: '00:00', occupancy: 1 },
  { time: '04:00', occupancy: 1 },
  { time: '08:00', occupancy: 5 },
  { time: '12:00', occupancy: 8 },
  { time: '16:00', occupancy: 6 },
  { time: '20:00', occupancy: 4 },
  { time: '23:59', occupancy: 2 }
];

export const quickDevices = [
  { id: 'conf-light', name: 'Conference Room Light', zone: 'Conference Room', icon: 'Lightbulb', active: true },
  { id: 'office-fan', name: 'Office Area Fan', zone: 'Office Area', icon: 'Fan', active: false }
];

export const activityLog = [
  { id: 1, title: 'Light turned ON', location: 'Conference Room', ago: '2 mins ago', type: 'info' },
  { id: 2, title: 'Motion detected', location: 'Main Entrance', ago: '5 mins ago', type: 'success' },
  { id: 3, title: 'Admin logged in', location: 'System', ago: '12 mins ago', type: 'muted' },
  { id: 4, title: 'Fan turned OFF', location: 'Office Area', ago: '18 mins ago', type: 'info' }
];

export const sensorOverview = [
  { name: 'PIR Sensor - Room 1', updated: 'Updated 1s ago', status: 'Online' },
  { name: 'PIR Sensor - Room 2', updated: 'Updated 2s ago', status: 'Online' },
  { name: 'PIR Sensor - Hallway', updated: 'Updated 1s ago', status: 'Online' },
  { name: 'Energy Meter - Main', updated: 'Updated 1s ago', status: 'Online' },
  { name: 'Energy Meter - Backup', updated: 'Updated 45s ago', status: 'Warning' },
  { name: 'Network Gateway', updated: 'Updated 2s ago', status: 'Online' }
];

export const energyCards = [
  { title: "Today's Consumption", value: '120 kWh', note: '+12% from yesterday' },
  { title: 'Peak Usage', value: '18 kW', note: 'At 2:30 PM' },
  { title: 'Avg. Daily Usage', value: '95 kWh', note: '-8% from last week' }
];

export const weeklyEnergyCost = [
  { day: 'Mon', energy: 95, cost: 28 },
  { day: 'Tue', energy: 101, cost: 30 },
  { day: 'Wed', energy: 88, cost: 26 },
  { day: 'Thu', energy: 109, cost: 32 },
  { day: 'Fri', energy: 98, cost: 29 },
  { day: 'Sat', energy: 74, cost: 22 },
  { day: 'Sun', energy: 70, cost: 21 }
];

export const sixMonthTrend = [
  { month: 'Jan', consumption: 2800 },
  { month: 'Feb', consumption: 2580 },
  { month: 'Mar', consumption: 2860 },
  { month: 'Apr', consumption: 2720 },
  { month: 'May', consumption: 3040 },
  { month: 'Jun', consumption: 3360 }
];

export const topConsumers = [
  { area: 'Conference Room', value: 42 },
  { area: 'Office Area', value: 34 },
  { area: 'Server Room', value: 26 },
  { area: 'Common Area', value: 18 }
];

export const peakHours = [
  { range: '12:00 PM - 2:00 PM', kw: 18 },
  { range: '9:00 AM - 11:00 AM', kw: 15 },
  { range: '3:00 PM - 5:00 PM', kw: 13.6 },
  { range: '6:00 PM - 8:00 PM', kw: 9 }
];

export const deviceGroups = {
  lighting: [
    { id: 'light-1', name: 'Conference Room', icon: 'Lightbulb', active: true },
    { id: 'light-2', name: 'Office Area', icon: 'Lightbulb', active: true },
    { id: 'light-3', name: 'Hallway', icon: 'Lightbulb', active: false }
  ],
  climate: [
    { id: 'fan-1', name: 'Main Fan', icon: 'Fan', active: false },
    { id: 'fan-2', name: 'Backup Fan', icon: 'Fan', active: false }
  ],
  other: [
    { id: 'display-1', name: 'Display Screen', icon: 'Tv', active: true },
    { id: 'coffee-1', name: 'Coffee Maker', icon: 'Coffee', active: false }
  ]
};

export const users = [
  { id: 1, name: 'Admin User', email: 'admin@kratos.com', role: 'Administrator', status: 'Active' },
  { id: 2, name: 'John Doe', email: 'john@kratos.com', role: 'Manager', status: 'Active' },
  { id: 3, name: 'Jane Smith', email: 'jane@kratos.com', role: 'Operator', status: 'Active' },
  { id: 4, name: 'Mike Johnson', email: 'mike@kratos.com', role: 'Viewer', status: 'Inactive' }
];

export const helpCards = [
  { title: 'Documentation', description: 'Browse system documentation and guides' },
  { title: 'Live Chat', description: 'Chat with our support team' },
  { title: 'Email Support', description: 'Send us an email for assistance' },
  { title: 'Tutorials', description: 'Watch video tutorials and guides' }
];

export const faqs = [
  { q: 'How do I add a new device?', a: 'Navigate to Device Control page and click the "Add Device" button.' },
  { q: 'How can I view energy consumption reports?', a: 'Go to Analytics / Reports section to view detailed energy reports.' },
  { q: 'What should I do if a sensor goes offline?', a: 'Check the Sensor Monitoring page for diagnostics and try resetting the sensor.' },
  { q: 'How do I manage user permissions?', a: 'Visit the Users page where you can add, edit, or remove user access.' }
];
