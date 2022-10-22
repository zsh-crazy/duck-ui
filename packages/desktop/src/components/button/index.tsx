import { Children, cloneElement, isValidElement, ReactNode } from 'react';

export const cloneNode = function (props: Record<string, any>, ref: any) {
    const { children, name, ...slotProps } = props;
    if (isValidElement(children as ReactNode)) {
        return cloneElement(children, {
            name: name,
            ...children.props,
            ...slotProps,
            ref: ref
        });
    }
    return Children.count(children) > 1 ? Children.only(null) : null;
};
export default cloneNode;
