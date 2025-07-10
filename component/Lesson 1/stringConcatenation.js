import Image from "next/image";

const user = {
    name: "Hedy Lamarr",
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
}
export default function StringConcatenation() {
    return (
        <>
            <h1>{user.name}</h1>
            {/* <img 
                className="avatar"
                src={user.imageUrl}
                alt="User Avatar"
                style={{
          width: user.imageSize,
          height: user.imageSize
        }}
            />

            <br></br> */}

            <Image 
                src={user.imageUrl} 
                alt="user.avatar" 
                height={user.imageSize} 
                width={user.imageSize}
            />
        </>
    );
}