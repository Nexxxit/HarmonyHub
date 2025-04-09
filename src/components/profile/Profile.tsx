import Hobbies from "../hobbies/Hobbies";

interface ProfileProps {
  user: {
    fullName: string;
    avatarUrl?: string;
  };
}

export default function Profile({ user }: ProfileProps) {

    const hobbiesTestData = [
        {id: 1, name: 'Музыка'},
        {id: 2, name: 'Программирование'}
    ] 

  return (
    <>
        <article className="flex items-center gap-3 pt-3">
      {user.avatarUrl && (
        <div className="w-18 h-18">
          <img
            className="aspect-square object-cover rounded-4xl"
            src={user.avatarUrl}
            alt="Аватар пользователя"
            role="img"
          />
        </div>
      )}
      <h2 className="text-2xl text-[#1A237E] pt-sans-bold">{user.fullName}</h2>
    </article>
    <Hobbies hobbiesData={hobbiesTestData} />
    </>
  );
}
