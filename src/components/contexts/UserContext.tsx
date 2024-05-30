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

export default function UserContextProvider({ children }: Props) {
  return "UserContextProvider";
}
