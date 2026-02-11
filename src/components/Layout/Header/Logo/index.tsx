import { getImgPath } from '@/utils/image';
import Image from 'next/image';
import Link from 'next/link';

const Logo: React.FC = () => {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      <div className="relative h-10 w-10 overflow-hidden rounded-lg">
        <Image
          src={getImgPath("/images/logo/logo.png")}
          alt="MentorPace Logo"
          width={40}
          height={40}
          className="object-contain"
          quality={100}
          priority
        />
      </div>
      <span className="text-xl font-bold text-midnight_text dark:text-white group-hover:text-accent transition-colors">
        MentorPace
      </span>
    </Link>
  );
};

export default Logo;
