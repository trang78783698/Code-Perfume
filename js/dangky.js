function register() {
  // @ts-ignore
  const name = document.getElementById("name").value;
  // @ts-ignore
  const password = document.getElementById("password").value;
  // @ts-ignore
  const phone = document.getElementById("phone").value;

  const regexPhone = /^\d+$/;
  const regexPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/;
  if (!name || !password || !phone) {
    alert("Vui lòng nhập đầy đủ thông tin");
  } else if (phone && !phone.match(regexPhone)) {
    alert("Vui lòng chỉ nhập số cho số điện thoại của bạn");
  } else if (password && (password.length < 6 || !password.match(regexPass))) {
    alert("Mật khẩu cần ít nhất 6 ký tự bao gồm số, chữ hoa, chữ thường");
  } else {
    window.location.replace("/trangchu.html");
  }
}
