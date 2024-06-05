import { createContext, useState } from "react";

type Props = {
  children: React.ReactNode;
};

type UserContextValues = {
  fullName: string;
  avatar: string;
  email: string;
  username: string;
  likes: string[];
  handleClick: (id: string) => void
};

export const UserContext = createContext({} as UserContextValues);

export default function UserContextProvider({ children }: Props) {
  const userValues = {
    fullName: "Justin Bieber",
    avatar:
      "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg",
    email: "justino@gmail.com",
    username: "JustinB",
    likes: [],
  };

  const [likes, setLikes] = useState<string[]>(userValues.likes);
  const user = { ...userValues, likes: likes };

 const handleClick = (id: string) => {
    if (user.likes.includes(id)) {
      setLikes(user.likes.filter((element) => element !== id));
    } else {
      setLikes(user.likes.concat(id));
    }
  };

  return (

    <UserContext.Provider value={{...user,handleClick}}>
      {children}
    </UserContext.Provider>
  );
}
