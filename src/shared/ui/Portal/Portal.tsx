import { FC } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    className?: string,
    element?: HTMLElement,
}

export const Portal: FC<PortalProps> = (PortalProps) => {
    const { children, element = document.body } = PortalProps;

    return createPortal(children, element);
};
