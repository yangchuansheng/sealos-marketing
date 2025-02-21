document.addEventListener('DOMContentLoaded', function() {
    const navbarHtml = `
    <nav class="navbar">
    <div class="navtop">
        <div class="header-title">
            <a href="/">
                <div class="logo"> <img src="../../../app_store/img/sealos.svg" alt="Sealos Logo"> Sealos </div>
            </a>
            <ul class="nav-links">
                <li><a href="/" target="_blank">首页</a></li>
                <li><a href="/devbox/" target="_blank">Devbox</a></li>
                <li><a href="/aiproxy" target="_blank">AI Proxy</a></li>
                <li><a href="/price" target="_blank">价格</a></li>
                <li><a href="/case">案例</a></li>
                <li><a href="https://sealos.run/docs/5.0.0/Intro" target="_blank">文档</a></li>
                <li><a href="https://template.hzh.sealos.run/" target="_blank">应用商店</a></li>
            </ul>
        </div>
        <div class="actions">
            <div class="headico"> <img src="../../../app_store/img/github.svg" alt="GitHub Icon">
                <div id="github-stars">Loading stars...</div>
            </div>
            <a href="https://hzh.sealos.run/" target="_blank" class="login-link">
                <button class="btn"> 登<P>录</P> </button>
            </a>
        </div>
    </div>
</nav>
    `;

    // 获取导航栏容器并插入内容
    const navContainer = document.getElementById('navbar-container');
    if (navContainer) {
        navContainer.innerHTML = navbarHtml;
    }
});

document.addEventListener('DOMContentLoaded', function() {
  // ... 其他代码 ...

  // 添加工具菜单的显示/隐藏功能
  function hideTools() {
      const dropdownContent = document.querySelector('.dropdown-content');
      if (dropdownContent) {
          dropdownContent.style.display = 'none';
      }
  }

  function showTools() {
      const dropdownContent = document.querySelector('.dropdown-content');
      if (dropdownContent) {
          dropdownContent.style.display = 'block';
      }
  }

  // 获取所有需要添加事件的元素
  const toolsDropdown = document.querySelector('.dropdown');
  if (toolsDropdown) {
      toolsDropdown.addEventListener('mouseover', showTools);
      toolsDropdown.addEventListener('mouseout', hideTools);
  }
});