// import db

export async function get() {
  // connect to db to fetch & parse data

  const guides = [
    { id: 1, title: '1985: The Day After' },
    { id: 2, title: '1942' },
    { id: 3, title: 'ACE: Air Combat Emulator' },
    { id: 4, title: 'Double Dragon' },
    { id: 5, title: 'Elite' },
  ];

  return {
    status: 200,
    body: { guides },
  };
}

// other handlers
export async function post() {}
export async function del() {}
