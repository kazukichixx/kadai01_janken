let hands = ['グー','チョキ','パー'];
let com_hands;

function judge(p_hands){
    com_hands = Math.floor( Math.random() * 3);

    if(p_hands === com_hands) result_text = "引き分け";
    else if(p_hands === 0 && com_hands === 1 ) result_text = "あなたの勝ち";
    else if(p_hands === 1 && com_hands === 2 ) result_text = "あなたの勝ち";
    else if(p_hands === 2 && com_hands === 0 ) result_text = "あなたの勝ち";
    else result_text = "あなたの負け";

    document.getElementById("com").innerHTML = hands[com_hands];
    document.getElementById("me").innerHTML = hands[p_hands];
    document.getElementById("result").innerHTML = result_text;
}