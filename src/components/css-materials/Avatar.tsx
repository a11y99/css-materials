import React from 'react';

interface AvatarProps {
    name?: string;
    src?: string;
    size?: 'small' | 'medium' | 'large' | number;
    bgColor?: string;
    icon?: React.ReactNode;
    shape?: 'circle' | 'square';
}

const Avatar: React.FC<AvatarProps> = ({ name, src, size = 'medium', bgColor = '#CCC', icon, shape = 'circle' }) => {
    const getInitials = (name: string) => {
        const initials = name.split(' ').map((n) => n[0]).join('');
        return initials.toUpperCase();
    };

    const getSizeClass = (size: 'small' | 'medium' | 'large' | number) => {
        if (typeof size === 'number') {
            return { width: size, height: size, fontSize: size / 2 };
        }
        return {};
    };

    const sizeClass = typeof size === 'string' ? `avatar-${size}` : '';
    const shapeClass = shape === 'square' ? 'avatar-square' : 'avatar-circle';

    return (
        <div className={`avatar ${sizeClass} ${shapeClass}`} style={{ ...getSizeClass(size), backgroundColor: bgColor }}>
            {src ? (
                <img className="avatar-image" src={src} alt={name} />
            ) : icon ? (
                <div className="avatar-icon">{icon}</div>
            ) : (
                <div className="avatar-initials">
                    {name ? getInitials(name) : '?'}
                </div>
            )}
        </div>
    );
};

export default Avatar;