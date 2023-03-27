import Head from 'next/head';
import { useEffect, useState } from 'react';
import AvatarCanvas from '~/components/AvatarCanvas';

const randomPart = (src: string, qty: number) =>
  `${src}${Math.floor(Math.random() * qty + 1)
    .toString()
    .padStart(2, '0')}`;

export default function Home() {
  const [avatar, setAvatar] = useState({
    bg: { src: 'base/Bg' },
    body: { src: 'base/Body' },
    hair: { src: 'hairs/Hair01' },
    eyes: { src: 'eyes/Eye01' },
    mouth: { src: 'mouths/Mouth01' },
    head: { src: 'faces/Face01' },
    outfit: { src: 'outfits/Outfit01' },
    accessories: { src: 'accessories/Accessory01' },
  });

  useEffect(() => {
    setAvatar({
      bg: { src: 'base/Bg' },
      body: { src: 'base/Body' },
      hair: { src: `${randomPart('hairs/Hair', 32)}` },
      eyes: { src: `${randomPart('eyes/Eye', 6)}` },
      mouth: { src: `${randomPart('mouths/Mouth', 10)}` },
      head: { src: `${randomPart('faces/Face', 8)}` },
      outfit: { src: `${randomPart('outfits/Outfit', 25)}` },
      accessories: { src: `${randomPart('accessories/Accessory', 18)}` },
    });
  }, []);

  return (
    <>
      <Head>
        <title>Avatartion</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen">
        <div className="mx-auto p-4 text-center sm:w-3/4 md:w-1/2">
          <div className="flex items-center justify-center mb-4">
            <h1 className="font-bold text-3xl">Avatartion</h1>
          </div>
          <div className="flex items-center justify-center h-[400px]">
            <AvatarCanvas {...avatar} />
          </div>
          <div className="fixed bottom-10 md:bottom-1/3 left-0 w-full bg-white flex items-center justify-center">
            <div className="flex flex-col items-center justify-center max-w-4xl mx-auto px-4 py-3 space-y-8">
              <div className="flex md:space-x-4">
                <select
                  className="w-full"
                  onChange={(e) =>
                    setAvatar({ ...avatar, head: { src: e.target.value } })
                  }
                >
                  {[...Array(8)].map((_, i) => (
                    <option
                      key={i}
                      value={`faces/Face${(i + 1).toString().padStart(2, '0')}`}
                    >
                      Face {(i + 1).toString().padStart(2, '0')}
                    </option>
                  ))}
                </select>
                <select
                  className="w-full"
                  onChange={(e) =>
                    setAvatar({ ...avatar, hair: { src: e.target.value } })
                  }
                >
                  {[...Array(32)].map((_, i) => (
                    <option
                      key={i}
                      value={`hairs/Hair${(i + 1).toString().padStart(2, '0')}`}
                    >
                      Hair {(i + 1).toString().padStart(2, '0')}
                    </option>
                  ))}
                </select>
                <select
                  className="w-full"
                  onChange={(e) =>
                    setAvatar({ ...avatar, eyes: { src: e.target.value } })
                  }
                >
                  {[...Array(6)].map((_, i) => (
                    <option
                      key={i}
                      value={`eyes/Eye${(i + 1).toString().padStart(2, '0')}`}
                    >
                      Eye {(i + 1).toString().padStart(2, '0')}
                    </option>
                  ))}
                </select>
                <select
                  className="w-full"
                  onChange={(e) =>
                    setAvatar({ ...avatar, mouth: { src: e.target.value } })
                  }
                >
                  {[...Array(10)].map((_, i) => (
                    <option
                      key={i}
                      value={`mouths/Mouth${(i + 1)
                        .toString()
                        .padStart(2, '0')}`}
                    >
                      Mouth {(i + 1).toString().padStart(2, '0')}
                    </option>
                  ))}
                </select>
                <select
                  className="w-full"
                  onChange={(e) =>
                    setAvatar({ ...avatar, outfit: { src: e.target.value } })
                  }
                >
                  {[...Array(25)].map((_, i) => (
                    <option
                      key={i}
                      value={`outfits/Outfit${(i + 1)
                        .toString()
                        .padStart(2, '0')}`}
                    >
                      Outfit {(i + 1).toString().padStart(2, '0')}
                    </option>
                  ))}
                </select>
                <select
                  className="w-full"
                  onChange={(e) =>
                    setAvatar({
                      ...avatar,
                      accessories: { src: e.target.value },
                    })
                  }
                >
                  {[...Array(18)].map((_, i) => (
                    <option
                      key={i}
                      value={`accessories/Accessory${(i + 1)
                        .toString()
                        .padStart(2, '0')}`}
                    >
                      Accessory {(i + 1).toString().padStart(2, '0')}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
                <p className="text-sm">
                  Made by{' '}
                  <a href="https://twitter.com/wilterrero">Wilmer Terrero</a>
                </p>
                <span className="text-gray-400 text-sm hidden md:block">|</span>
                <p className="text-sm">
                  Artwork by <a href="https://www.drawkit.com/">Drawkit</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
