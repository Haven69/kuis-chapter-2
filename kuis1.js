const kata = ["santai", "berkualitas", "I love coding", ];
for (let i=1; i<=20; i++) {
    const isi = (i - 1) % kata.length;
    console.log(i + " - " + kata[isi]); 
}