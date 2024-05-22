//import CardList from "./CardList";


export default function Counter() {
    let count = 0;
    console.log(count);
    const clickToCount: HTMLParagraphElement | null = document.querySelector(".scoreUp");
    clickToCount?.addEventListener('click', handleClick);
    updateScore();
    function handleClick() {
        count++;
        updateScore();
    }
    function updateScore() {
        (clickToCount as HTMLParagraphElement).textContent = `${count}`;
    }

    return clickToCount;
}