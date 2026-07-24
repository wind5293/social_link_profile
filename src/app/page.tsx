import Image from "next/image";
import Link from "next/link";

const SOCIAL_LINKS = [
    {
        name: "GitHub",
        url: "https://www.github.com/wind5293",
    },
    {
        name: "Facebook",
        url: "https://www.facebook.com/wind5293",
    },
]

export default function Home() {
    return (
        <div className="bg-black flex flex-col h-screen justify-center items-center">
            <div className="bg-gray-900 p-8 w-96 min-h-fit justify-center place-items-center rounded-xl grid grid-cols-1 gap-3 text-white">
                <Image
                    width={100}
                    height={100}
                    src="/social_link_profile/cat.jpg"
                    alt="my_avatar"
                    className="rounded-full"
                />
                <div className="grid grid-cols-1 gap-1 justify-center place-items-center">
                    <h1 className="font-bold text-lg">
                        Nguyễn Đức Phong
                    </h1>
                    <p className="text-[hsl(75,94%,57%)]">
                        My address
                    </p>
                </div>

                <p className="">
                    Greetings
                </p>
                {SOCIAL_LINKS.map(item => (
                    <Link
                        key={item.name}
                        href={item.url}
                        className="bg-gray-800 text-white text-sm font-semibold p-4 rounded-lg w-full flex justify-center hover hover:bg-[hsl(75,94%,57%)] hover:text-black"
                    >
                        {item.name}
                    </Link>
                ))}

            </div>
        </div>
    );
}
