import { useCallback, useState } from "react";

export function useInput(initialInput) {
    const [input, setInput] = useState(initialInput);

    const onChange = useCallback((e) => {
        const { name, value } = e.target;
        setInput((input) => ({ ...input, [name]: value }));
    }, []);

    const reset = useCallback(() => setInput(initialInput), [initialInput]);
    return [input, onChange, reset];
}
