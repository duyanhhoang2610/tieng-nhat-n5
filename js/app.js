// Quản lý trạng thái Auth
document.addEventListener("DOMContentLoaded", () => {
  checkAuth();
  setupEventListeners();
});

function checkAuth() {
  const loggedUser = localStorage.getItem("currentUser");
  const userControl = document.getElementById("userControl");
  const sidebar = document.getElementById("sidebar");
  const loginSection = document.getElementById("loginSection");
  const registerSection = document.getElementById("registerSection");
  const lessonContent = document.getElementById("lessonContent");

  if (loggedUser) {
    userControl.innerHTML = `<span>Xin chào, <b>${loggedUser}</b></span> <button class="btn" style="width:auto; padding:5px 10px;" onclick="logout()">Đăng xuất</button>`;
    sidebar.style.display = "block";
    loginSection.style.display = "none";
    registerSection.style.display = "none";
    lessonContent.style.display = "block";
    
    renderSidebar();
    loadLesson(1); // Mặc định mở Bài 1
  } else {
    userControl.innerHTML = ``;
    sidebar.style.display = "none";
    lessonContent.style.display = "none";
    loginSection.style.display = "block";
  }
}

function showAuth(type) {
  if (type === 'register') {
    document.getElementById("loginSection").style.display = "none";
    document.getElementById("registerSection").style.display = "block";
  } else {
    document.getElementById("registerSection").style.display = "none";
    document.getElementById("loginSection").style.display = "block";
  }
}

function setupEventListeners() {
  // Đăng ký
  document.getElementById("registerForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const u = document.getElementById("regUser").value.trim();
    const p = document.getElementById("regPass").value.trim();

    let users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.find(user => user.username === u)) {
      alert("Tên tài khoản đã tồn tại!");
      return;
    }

    users.push({ username: u, password: p });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Đăng ký thành công! Trang web sẽ tự động tải lại để bạn đăng nhập.");
    
    // Tự động reload lại trang theo đúng yêu cầu
    window.location.reload();
  });

  // Đăng nhập
  document.getElementById("loginForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const u = document.getElementById("loginUser").value.trim();
    const p = document.getElementById("loginPass").value.trim();

    let users = JSON.parse(localStorage.getItem("users") || "[]");
    const found = users.find(user => user.username === u && user.password === p);

    if (found) {
      localStorage.setItem("currentUser", u);
      checkAuth();
    } else {
      alert("Tài khoản hoặc mật khẩu không đúng!");
    }
  });
}

function logout() {
  localStorage.removeItem("currentUser");
  window.location.reload();
}

// Render Sidebar danh sách bài học
function renderSidebar() {
  const ul = document.getElementById("lessonList");
  ul.innerHTML = "";
  japaneseData.lessons.forEach(lesson => {
    const li = document.createElement("li");
    li.innerText = lesson.title;
    li.onclick = () => {
      document.querySelectorAll(".sidebar li").forEach(el => el.classList.remove("active"));
      li.classList.add("active");
      loadLesson(lesson.id);
    };
    ul.appendChild(li);
  });
  ul.children[0]?.classList.add("active");
}

// Render dữ liệu Bài Học
function loadLesson(id) {
  const lesson = japaneseData.lessons.find(l => l.id === id);
  if (!lesson) return;

  document.getElementById("lessonTitle").innerText = lesson.title;

  // 1. Render Từ vựng
  let vocabHTML = `<table><tr><th>Hiragana</th><th>Kanji</th><th>Romaji</th><th>Ý nghĩa</th></tr>`;
  lesson.vocab.forEach(v => {
    vocabHTML += `<tr><td>${v.hiragana}</td><td>${v.kanji}</td><td>${v.romaji}</td><td>${v.meaning}</td></tr>`;
  });
  vocabHTML += `</table>`;
  document.getElementById("vocabTab").innerHTML = vocabHTML;

  // 2. Render Kanji
  let kanjiHTML = `<table><tr><th>Chữ Hán</th><th>Âm On</th><th>Âm Kun</th><th>Hán Việt / Ý nghĩa</th></tr>`;
  lesson.kanji.forEach(k => {
    kanjiHTML += `<tr><td style="font-size:1.5rem; text-align:center;">${k.char}</td><td>${k.onyomi}</td><td>${k.kunyomi}</td><td>${k.meaning}</td></tr>`;
  });
  kanjiHTML += `</table>`;
  document.getElementById("kanjiTab").innerHTML = kanjiHTML;

  // 3. Render Ngữ Pháp
  let grammarHTML = "";
  lesson.grammar.forEach(g => {
    grammarHTML += `
      <div class="grammar-item">
        <h3>${g.title}</h3>
        <p><strong>Giải thích:</strong> ${g.explanation}</p>
        <p><strong>Ví dụ:</strong> <i>${g.example}</i></p>
      </div>`;
  });
  document.getElementById("grammarTab").innerHTML = grammarHTML;

  // 4. Render Hội thoại
  let kaiwaHTML = `<div class="kaiwa-box"><h3>${lesson.kaiwa.title}</h3><br>`;
  lesson.kaiwa.dialogue.forEach(d => {
    kaiwaHTML += `
      <div class="dialogue-line">
        <span class="speaker">${d.speaker}:</span> 
        <span>${d.japanese}</span><br>
        <small style="color:#666; margin-left: 10px;">➔ ${d.vietnamese}</small>
      </div>`;
  });
  kaiwaHTML += `</div>`;
  document.getElementById("kaiwaTab").innerHTML = kaiwaHTML;
}

// Chuyển Tab
function openTab(tabId) {
  document.querySelectorAll(".tab-content").forEach(el => el.style.display = "none");
  document.querySelectorAll(".tab-btn").forEach(el => el.classList.remove("active"));
  
  document.getElementById(tabId).style.display = "block";
  event.currentTarget.classList.add("active");
}
