function drawFortune() {
    // 設定運勢的權重（大吉較多，凶較少）
    let fortunes = [
        { level: "大吉", description: "新年開運！財富、事業、愛情三重奏，順風順水！🎊", weight: 25 },
        { level: "小吉", description: "運勢佳！貴人相助，做事順利，健康平安！", weight: 20 },
        { level: "半吉", description: "小有收穫，努力加油會有好事發生！🎯", weight: 15 },
        { level: "吉", description: "運勢稍弱，記得多努力，堅持下去就會好轉！", weight: 15 },
        { level: "末吉", description: "運勢普通，專注於當下，機會總會來！", weight: 15 },
    ];

    // 依據權重隨機抽取運勢
    let weightedFortunes = [];
    fortunes.forEach(fortune => {
        for (let i = 0; i < fortune.weight; i++) {
            weightedFortunes.push(fortune);
        }
    });

    let randomFortune = weightedFortunes[Math.floor(Math.random() * weightedFortunes.length)];

    // 顯示抽籤效果
    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        <div class="omikuji">🎴 ${randomFortune.level}</div>
        <p>${randomFortune.description}</p>
    `;
}
