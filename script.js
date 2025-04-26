const employees = [
  { name: "محمد العتيبي", specialization: "دعم فني", cooperation: "حل مشكلات أجهزة", contact: "m.otaibi@email.com", extension: "1012" },
  { name: "سارة القحطاني", specialization: "دعم فني", cooperation: "دعم فني تقني", contact: "s.qhtani@email.com", extension: "1025" },
  { name: "خالد الشهراني", specialization: "دعم فني", cooperation: "صيانة أجهزة", contact: "k.shahrani@email.com", extension: "1038" },
  { name: "نورة الغامدي", specialization: "شبكات", cooperation: "حل مشكلات شبكات", contact: "n.gamdi@email.com", extension: "1040" },
  { name: "فهد الحربي", specialization: "شبكات", cooperation: "ضبط إعدادات الشبكة", contact: "f.harbi@email.com", extension: "1053" },
  { name: "ريم الزهراني", specialization: "موارد بشرية", cooperation: "إدارة ملفات الموظفين", contact: "r.zahrani@email.com", extension: "1066" },
  { name: "عبدالله اليامي", specialization: "موارد بشرية", cooperation: "تنسيق الموارد البشرية", contact: "a.yami@email.com", extension: "1072" },
  { name: "هيا الشهري", specialization: "موارد بشرية", cooperation: "توظيف وتدريب", contact: "h.shahri@email.com", extension: "1081" },
  { name: "لولوة السبيعي", specialization: "إدارة صلاحيات", cooperation: "ضبط الصلاحيات", contact: "l.sbeai@email.com", extension: "1099" },
  { name: "عبدالعزيز المطيري", specialization: "مشاريع", cooperation: "إدارة المشاريع", contact: "a.mutairi@email.com", extension: "1105" },
  { name: "سلمان الدوسري", specialization: "مشاريع", cooperation: "مراقبة المشاريع", contact: "s.dosari@email.com", extension: "1113" },
  { name: "أماني الغامدي", specialization: "ذكاء اصطناعي", cooperation: "تحليل بيانات", contact: "a.gamdi@email.com", extension: "1120" },
  { name: "رائد الشهري", specialization: "ذكاء اصطناعي", cooperation: "تعلم الآلة", contact: "r.shahri@email.com", extension: "1132" },
  { name: "مها العتيبي", specialization: "ذكاء اصطناعي", cooperation: "تصنيف بيانات", contact: "m.otaibi2@email.com", extension: "1147" },
  { name: "عبدالله السبيعي", specialization: "ذكاء اصطناعي", cooperation: "تحليل نماذج", contact: "a.sbeai@email.com", extension: "1154" }
];

function displayCards(filteredEmployees) {
  const container = document.getElementById("cardsContainer");
  container.innerHTML = "";
  filteredEmployees.forEach(emp => {
    container.innerHTML += `
      <div class="card">
        <h2>${emp.name}</h2>
        <p><strong>التخصص:</strong> ${emp.specialization}</p>
        <p><strong>نوع التعاون:</strong> ${emp.cooperation}</p>
        <p><strong>التواصل:</strong> ${emp.contact}</p>
        <p><strong>التحويلة:</strong> ${emp.extension}</p>
      </div>
    `;
  });
}

// عرض الكل بالبداية
displayCards(employees);

// عند تغيير الاختيار
document.getElementById("specializationSelect").addEventListener("change", function() {
  const selected = this.value;
  if (selected === "الكل") {
    displayCards(employees);
  } else {
    const filtered = employees.filter(emp => emp.specialization === selected);
    displayCards(filtered);
  }
});
function displayCards(filteredEmployees) {
  const container = document.getElementById("cardsContainer");
  container.innerHTML = "";
  
  filteredEmployees.forEach((emp, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.style.animationDelay = `${index * 0.1}s`; // كل بطاقة تتأخر 0.1 ثانية أكثر
    card.innerHTML = `
      <h2>${emp.name}</h2>
      <p><strong>التخصص:</strong> ${emp.specialization}</p>
      <p><strong>نوع التعاون:</strong> ${emp.cooperation}</p>
      <p><strong>التواصل:</strong> ${emp.contact}</p>
      <p><strong>التحويلة:</strong> ${emp.extension}</p>
    `;
    container.appendChild(card);
  });
}
