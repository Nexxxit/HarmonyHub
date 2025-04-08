interface ProfileProps {
    user: {
        fullName: string;
        avatarUrl?: string;
    }
}

export default function Profile({user}: ProfileProps) {
    return (
        <article className="flex items-center gap-3">
            {user.avatarUrl && (
                <div className="w-20 h-20">
                    <img className="aspect-square object-cover rounded-4xl" src={user.avatarUrl} alt="Аватар пользователя" role="img" />
                </div>
            )}
            <h2 className=" text-2xl text-white pt-sans-bold">{user.fullName}</h2>
        </article>
    );
}