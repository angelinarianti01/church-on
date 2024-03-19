var database = {
  departments: [
    {
      id: 0,
      name: 'Praise and Worship',
      img: 'paw.jpg',
    },
    {
      id: 1,
      name: 'Communication',
      img: 'paw.jpg',
    },
    {
      id: 2,
      name: 'Usher',
      img: 'usher.jpg',
    },
    {
      id: 3,
      name: 'Food and Beverage',
      img: 'usher.jpg',
    },
  ],
  roles: [
    {
      id: 1,
      deptId: 0,
      name: 'Music Director',
    },
    {
      id: 2,
      deptId: 0,
      name: 'Worship Leader',
    },
    {
      id: 3,
      deptId: 0,
      name: 'Supporting Singer',
    },
    {
      id: 4,
      deptId: 0,
      name: 'Drummer',
    },
    {
      id: 5,
      deptId: 0,
      name: 'Guitarist',
    },
    {
      id: 6,
      deptId: 1,
      name: 'Videographeer',
    },
    {
      id: 7,
      deptId: 1,
      name: 'Photographer',
    },
    {
      id: 8,
      deptId: 1,
      name: 'Editor',
    },
    {
      id: 9,
      deptId: 2,
      name: 'Front usher',
    },
    {
      id: 10,
      deptId: 1,
      name: 'Back usher',
    },
    {
      id: 11,
      deptId: 2,
      name: 'Data taker',
    },
    {
      id: 12,
      deptId: 2,
      name: 'Offerings holder',
    },
    {
      id: 13,
      deptId: 2,
      name: 'Chef',
    },
    {
      id: 14,
      deptId: 3,
      name: 'Runner 1',
    },
    {
      id: 15,
      deptId: 3,
      name: 'Runner 2',
    },
  ],
  people: [
    {
      id: 1,
      name: 'John Doe',
      age: 30,
      phone: '123-456-7890',
      address: '123 Main St, City A',
      deptId: 0,
    },
    {
      id: 2,
      name: 'Jane Smith',
      age: 25,
      phone: '987-654-3210',
      address: '456 Elm St, City B',
      deptId: 1,
    },
    {
      id: 3,
      name: 'Alice Johnson',
      age: 35,
      phone: '555-123-4567',
      address: '789 Oak St, City C',
      deptId: 2,
    },
    {
      id: 4,
      name: 'Robert Williams',
      age: 42,
      phone: '111-222-3333',
      address: '567 Maple St, City D',
      deptId: 3,
    },
    {
      id: 5,
      name: 'Emily Brown',
      age: 28,
      phone: '444-555-6666',
      address: '901 Cedar St, City E',
      deptId: 0,
    },
    {
      id: 6,
      name: 'Michael Johnson',
      age: 37,
      phone: '777-888-9999',
      address: '345 Pine St, City F',
      deptId: 1,
    },
    {
      id: 7,
      name: 'Sarah Davis',
      age: 33,
      phone: '222-333-4444',
      address: '678 Oak St, City G',
      deptId: 2,
    },
    {
      id: 8,
      name: 'Daniel Wilson',
      age: 45,
      phone: '666-777-8888',
      address: '432 Elm St, City H',
      deptId: 3,
    },
    {
      id: 9,
      name: 'Olivia Taylor',
      age: 29,
      phone: '999-000-1111',
      address: '345 Maple St, City I',
      deptId: 0,
    },
    {
      id: 10,
      name: 'William Anderson',
      age: 31,
      phone: '777-111-2222',
      address: '789 Cedar St, City J',
      deptId: 1,
    },
    {
      id: 11,
      name: 'Sophia Brown',
      age: 27,
      phone: '444-666-8888',
      address: '567 Oak St, City K',
      deptId: 2,
    },
    {
      id: 12,
      name: 'David Lee',
      age: 38,
      phone: '111-555-9999',
      address: '901 Elm St, City L',
      deptId: 3,
    },
    {
      id: 13,
      name: 'Ella Johnson',
      age: 32,
      phone: '222-777-3333',
      address: '345 Pine St, City M',
      deptId: 0,
    },
    {
      id: 14,
      name: 'Benjamin Davis',
      age: 40,
      phone: '666-222-8888',
      address: '678 Maple St, City N',
      deptId: 1,
    },
  ],
  eventServices: [
    {
      id: 0,
      name: 'General Sunday Service',
      date: '22-11-2023',
    },
    {
      id: 1,
      name: 'General Sunday Service',
      date: '15-05-2023',
    },
    {
      id: 2,
      name: 'Youth conference',
      date: '10-09-2023',
    },
    {
      id: 3,
      name: 'Worship Night',
      date: '27-07-2023',
    },
    {
      id: 4,
      name: 'General Sunday Service',
      date: '03-08-2023',
    },
  ],
  events: [
    {
      serviceId: 0,
      deptId: 0, // performers
      picId: 1,
      time: '08:00',
      description: 'Sound check',
      notes: 'No feedback',
    },
  ],
  roster: [
    {
      serviceId: 0,
      assigned: [
        {
          roleId: 0,
          personId: 0,
        },
        {
          roleId: 1,
          personId: 2,
        },
        {
          roleId: 2,
          personId: 3,
        },
      ],
    },
  ],
};

export default database;
