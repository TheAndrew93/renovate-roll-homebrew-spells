This project was created as part of a personal initiative to experiment with interactive web applications and AI for a Homebrew Tabletop Roleplaying Game I created. Development was assisted by ChatGPT, providing support in coding, logic structuring, and interface design.

# 🧙‍♂️ Spell Card Generator

Generate printable 3.5" x 2" TTRPG spell cards from a CSV file — perfect for character sheets, encounter props, or just showing off your homebrew magic.

---

## 🚀 What It Does

- Upload a CSV file with spell data.
- Instantly generate beautiful, printable spell cards.
- Designed for standard printer paper and real-world use at the table.

---

## 💻 How to Use

1. Download or clone this repo.
2. Open `spell-cards.html` in your browser.
3. Upload your `.csv` file using the input.
4. Click “Print Spell Cards” to send it to your printer.

---

## 📁 Files in This Repo

| File | Description |
|------|-------------|
| `spell-cards.html` | Main HTML interface |
| `spell-card-styles.css` | Style rules for cards (print friendly) |
| `spell-card-generator.js` | JavaScript to parse CSV and render cards |
| `spell-import.csv` | Example CSV file to test with |

---

## 🧾 CSV Format

Your CSV should include these **7 columns**, in this exact order:

Spell Name,Damage,Stat,Area of Effect,Range,Direction,Description

Example row:

Architectural Aura,,Charming Expertise,30 ft radius emanation,Self,Omni,"Radiate an enchanting aura..."

---

## 🎨 Design Notes

- Responsive card layout using Flexbox.
- Typography inspired by fantasy rulebooks.
- Cards print two per row for optimal page usage.

---

## 🛠 Built With

- HTML + CSS (with variables & Flexbox)
- JavaScript (Vanilla, async/await)

---

## 📜 License

Permission is granted to use, modify, and share this code for any purpose.
This software is provided "as is", without warranty of any kind. No support is offered.
