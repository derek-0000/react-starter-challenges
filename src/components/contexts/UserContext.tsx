import { createContext } from "react";

type Props = {
  children: React.ReactNode;
};

type UserContextValues = {
  fullName: string;
  avatar: string;
  email: string;
  username: string;
  likes: string[];
};

const userValues :UserContextValues= {
  fullName: "Justin Bieber",
  avatar: "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg",
  email: "justino@gmail.com",
  username: "JustinB",
  likes: ['a', 'e', 'f'],
};


export const UserContext = createContext(userValues)

export default function UserContextProvider({ children }: Props) {
  //const [user, setUser] = useState()
  console.log(UserContext.Provider)
  return (
    <UserContext.Provider value={userValues}>{children}</UserContext.Provider>
  );
}
