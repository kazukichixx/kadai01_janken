let hands = ['グー','チョキ','パー'];
let com_hands;

function judge(button){
    com_hands = Math.floor( Math.random() * 3);

    if(button === com_hands) result_text = "引き分け";
    else if(button === 0 && com_hands === 1 ) result_text = "あなたの勝ち";
    else if(button === 1 && com_hands === 2 ) result_text = "あなたの勝ち";
    else if(button === 2 && com_hands === 0 ) result_text = "あなたの勝ち";
    else result_text = "あなたの負け";

    document.getElementById("com_hands").innerHTML = hands[com_hands];
　　 document.getElementById("judgment").innerHTML = result_text;
}