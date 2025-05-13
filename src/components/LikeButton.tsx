import React from "react";

type LikeButtonProps = {
    onChangeLike: (newLike: number) => void;
};

export function LikeButton(props: LikeButtonProps) {
    const [like, setLike] = React.useState<number>(0);

    function increment() {
        let newLike = like + 1;
        setLike(newLike);
        props.onChangeLike(newLike);
    }

    return (
        <div>
            <h4>Contatore di like</h4>

            <p>Hai {like} mi piace!</p>
            <button onClick={increment}>Like</button>
        </div>
    )
}