import Image from 'next/image'
import Link from 'next/link'

const navIcons = [
    { src: '/assets/icons/search.svg', alt: 'search' },
]

const Navbar = () => {
    return (
        <header className="w-full">
            <nav className="nav">
                <Link href="/" className="flex items-center gap-1">
                    <Image
                        src="/assets/icons/logo.svg"
                        width={27}
                        height={27}
                        alt="logo"
                    />

                    <p className="nav-logo">
                        Bargain <span className='text-primary-green'>Buddy</span>
                    </p>
                </Link>

                <div className="flex items-center gap-5">
                    {navIcons.map((icon) => (
                        <Image
                            key={icon.alt}
                            src={icon.src}
                            alt={icon.alt}
                            width={28}
                            height={28}
                            className="object-contain"
                        />
                    ))}
                </div>
            </nav>
        </header>
    )
}

export default Navbar