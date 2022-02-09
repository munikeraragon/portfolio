import { memo } from 'react';
import Link from 'next/link';

export interface TabProps {
    label: string;
    align?: string;
    href?: string;
    className?: string;
}

export interface NavbarProps {
    className?: string;
    maxWidth?: string;
    tabs?: TabProps[];
}

const Tab: React.FC<TabProps> = ({ label, className = '', href = '' }) => {
    return (
        <Link href={href}>
            <a>
                <div className={`${className} justify-center p-1.5 px-5 rounded`}>{label}</div>
            </a>
        </Link>
    );
};

const Navbar: React.FC<NavbarProps> = ({ className = '', tabs = [] }) => {
    return (
        <div className={`${className} flex w-full t-0`}>
            <div className='flex w-full mx-auto mx-24'>
                <div className='flex align-center flex-1'>
                    {tabs.map((tab) => (
                        <div key={tab.label}>
                            <Tab {...tab} />
                        </div>
                    ))}
                </div>

                <div className='flex align-center'>
                    <div className={'justify-center p-1.5 px-5 rounded'}>Linkedin</div>
                </div>
            </div>
        </div>
    );
};

export default memo(Navbar);
