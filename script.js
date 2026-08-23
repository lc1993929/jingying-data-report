const brief = `你好，我想了解 ¥499 的单周期经营分析试做。\n\n1. 经营渠道：\n2. 分析周期：\n3. 最想回答的问题：\n4. 现有导出表及主要字段：\n\n我会先提供删除姓名、电话、地址等信息后的样表，用于确认是否适配。`;

const button = document.querySelector("#copy-brief");
const status = document.querySelector("#copy-status");

async function writeBrief() {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(brief);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = brief;
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.append(textarea);
  textarea.select();
  const copied = document.execCommand("copy");
  textarea.remove();
  if (!copied) throw new Error("copy failed");
}

button?.addEventListener("click", async () => {
  try {
    await writeBrief();
    button.textContent = "已复制需求清单";
    status.textContent = "已复制，可以回到原聊天窗口粘贴。";
  } catch {
    status.textContent = "复制失败，请手动记录上面的四项信息。";
  }
});