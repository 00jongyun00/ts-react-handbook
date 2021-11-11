interface ChildProps {
    color: string;
}

export const Child = ({ color }: ChildProps) => {
    return <div>{color}</div>;
};

// React.FC === React.FunctionComponent
export const ChildAsFc: React.FC<ChildProps> = ({ color }) => {
    return <div>{color}</div>;
};
