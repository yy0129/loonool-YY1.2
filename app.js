document.addEventListener("DOMContentLoaded", () => {
  const listEl = document.getElementById("space-list");
  const btnCreate = document.getElementById("btn-ms-create");
  const btnLogin = document.getElementById("btn-ms-login");

  const demoSpaces = [
    {
      name: "2025 春季主图审核空间",
      owner: "Demo Owner",
      tasks: 4,
      updated: "2025-12-03",
      status: "Active",
    },
    {
      name: "包装升级 V2 图片审核",
      owner: "Brand Team",
      tasks: 2,
      updated: "2025-11-28",
      status: "Active",
    },
    {
      name: "历史活动存档空间",
      owner: "Marketing",
      tasks: 8,
      updated: "2025-10-10",
      status: "Archived",
    },
  ];

  function tip(msg) {
    alert(msg + "\n\n后续你可以改成真实跳转到审核空间站点。");
  }

  btnCreate?.addEventListener("click", () => {
    tip("这里应该进入：创建 Space 的流程 / 页面");
  });

  btnLogin?.addEventListener("click", () => {
    tip("这里应该跳转到：登录站点");
  });

  if (listEl) {
    listEl.innerHTML = "";
    demoSpaces.forEach((space) => {
      const card = document.createElement("div");
      card.className = "space-card";

      card.innerHTML = `
        <div class="space-main">
          <div class="space-name">${space.name}</div>
          <div class="space-meta">
            创建者：${space.owner} · 任务数：${space.tasks} · 最近更新：${
        space.updated
      } · 状态：${space.status}
          </div>
        </div>
        <button class="btn btn-outline" type="button">
          进入空间
        </button>
      `;

      card.querySelector("button").addEventListener("click", () => {
        tip(`进入「${space.name}」对应的审核空间站点`);
      });

      listEl.appendChild(card);
    });
  }
});
