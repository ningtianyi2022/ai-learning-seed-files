-- AI学习平台 L1-L5 课程数据
-- Generated: 2026-06-15T12:17:07.914Z

BEGIN;
TRUNCATE TABLE sections CASCADE;
TRUNCATE TABLE chapters CASCADE;
TRUNCATE TABLE courses CASCADE;

-- ====== L1: AI入门与工具使用 ======
INSERT INTO courses(id,title,level,description,thumbnail,"totalDuration",tags) VALUES(
  'l1-ai-intro-tools','AI入门与工具使用',1,'零基础入门AI，学习使用主流AI工具提升工作效率和创造力。无需编程基础，适合所有想了解AI的人。','https://example.com/thumbnails/l1-ai-intro.jpg',7200,ARRAY['AI入门','工具使用','ChatGPT','Midjourney','办公自动化']::text[]);

INSERT INTO chapters(id,"courseId",title,description,"order") VALUES('l1-ch1','l1-ai-intro-tools','第1章：认识AI','了解AI的基本概念、发展历程和实际应用',1);
INSERT INTO sections(id,"chapterId",title,description,"order",duration,content) VALUES('l1-ch1-sec1','l1-ch1','1.1 什么是人工智能','从日常生活出发，理解AI的定义、分类和应用场景',1,1800,'
# 1.1 什么是人工智能

## 学习目标

通过本节学习，你将能够：
- 理解人工智能的定义和核心概念
- 识别AI在日常生活中的应用场景
- 区分不同类型的AI（ANI、AGI、ASI）
- 了解AI的发展历程和重要里程碑

---

## 1.1.1 AI是什么？

### 从生活场景理解AI

**场景1：手机拍照**
当你用手机拍照时，AI会自动：
- 识别人脸并美颜
- 场景检测（夜景、人像、风景）
- 自动调整参数（HDR、曝光）

**场景2：视频推荐**
抖音、B站的推荐系统：
- 分析你的观看历史
- 预测你喜欢的视频类型
- 实时调整推荐策略

**场景3：语音助手**
Siri、小爱同学、天猫精灵：
- 语音识别（听懂你说的话）
- 自然语言理解（理解意图）
- 语音合成（回答你的问题）

### 人工智能的定义

**学术定义**：
> 人工智能（Artificial Intelligence, AI）是计算机科学的一个分支，致力于创建能够模拟人类智能行为的系统。

**通俗理解**：
> 让机器像人一样思考、学习、决策和执行任务。

**核心要素**：
1. **感知**：看懂、听懂、读懂（视觉、语音、文本）
2. **理解**：分析问题、提取信息
3. **决策**：选择最佳方案
4. **执行**：完成任务

---

## 1.1.2 AI的分类

### 按能力分类

| 类型 | 全称 | 定义 | 例子 |
|------|------|------|------|
| **ANI** | 弱人工智能（Artificial Narrow Intelligence） | 专注于单一任务 | Siri、AlphaGo、自动驾驶 |
| **AGI** | 通用人工智能（Artificial General Intelligence） | 像人一样通用智能 | 尚未实现 |
| **ASI** | 超级人工智能（Artificial Superintelligence） | 超越人类智能 | 科幻概念 |

**当前阶段**：我们处于**ANI时代**，AI在特定领域超越人类，但无法跨领域迁移。

### 按技术分类

1. **机器学习（Machine Learning）**
   - 从数据中学习规律
   - 例子：垃圾邮件过滤、房价预测

2. **深度学习（Deep Learning）**
   - 使用神经网络模拟人脑
   - 例子：图像识别、语音识别

3. **自然语言处理（NLP）**
   - 理解和生成人类语言
   - 例子：机器翻译、智能客服

4. **计算机视觉（Computer Vision）**
   - 理解和分析图像/视频
   - 例子：人脸识别、自动驾驶

5. **强化学习（Reinforcement Learning）**
   - 通过试错学习最优策略
   - 例子：AlphaGo、游戏AI

---

## 1.1.3 AI的发展历程

### 三次AI浪潮

**第一次浪潮（1950s-1970s）：符号主义**
- 1950年：图灵提出"图灵测试"
- 1956年：达特茅斯会议，"人工智能"诞生
- 1970s：专家系统兴起
- **局限**：计算能力有限，知识表示困难

**第二次浪潮（1980s-1990s）：机器学习**
- 1986年：反向传播算法提出
- 1997年：IBM深蓝战胜国际象棋冠军
- **局限**：数据不足，算法不够强大

**第三次浪潮（2006至今）：深度学习**
- 2006年：Hinton提出深度学习
- 2012年：AlexNet在ImageNet夺冠
- 2016年：AlphaGo战胜李世石
- 2022年：ChatGPT发布，AI大模型时代

### 重要里程碑

\\`\\`\\`
1950 ─── 图灵测试
  ↓
1956 ─── 达特茅斯会议（AI诞生）
  ↓
1997 ─── 深蓝战胜卡斯帕罗夫
  ↓
2012 ─── AlexNet（深度学习爆发）
  ↓
2016 ─── AlphaGo（强化学习）
  ↓
2022 ─── ChatGPT（大模型时代）
  ↓
2024 ─── GPT-4、Claude、Gemini（多模态）
\\`\\`\\`

---

## 1.1.4 AI在日常生活中的应用

### 1. 办公效率

**文档处理**：
- Grammarly：英文语法检查
- Notion AI：智能写作助手
- WPS AI：中文文档智能处理

**会议助手**：
- 飞书妙记：会议录音转文字
- Zoom AI：自动生成会议纪要

**邮件处理**：
- Outlook AI：智能回复建议
- Gmail Smart Compose：邮件自动补全

### 2. 创意设计

**图像生成**：
- Midjourney：艺术风格图像
- Stable Diffusion：开源图像生成
- DALL-E 3：逼真图像生成

**视频制作**：
- Runway ML：AI视频编辑
- Synthesia：AI数字人视频
- CapCut：智能剪辑

**音乐创作**：
- Suno AI：文本生成音乐
- AIVA：AI作曲

### 3. 学习辅助

**语言学习**：
- Duolingo：AI个性化学习路径
- Grammarly：写作纠错

**知识问答**：
- ChatGPT：通用知识问答
- Perplexity：AI搜索引擎

**代码学习**：
- GitHub Copilot：代码自动补全
- Replit Ghostwriter：AI编程助手

### 4. 生活服务

**智能推荐**：
- 抖音/B站：视频推荐
- 淘宝/京东：商品推荐
- 美团/饿了么：餐厅推荐

**导航出行**：
- 高德/百度地图：实时路况、路线规划
- 滴滴/网约车：智能派单

**健康监测**：
- Apple Watch：心率监测、跌倒检测
- 智能手环：睡眠分析

---

## 1.1.5 AI的局限性

### 当前AI的不足

1. **缺乏常识**
   - 例子：AI可能生成"在水中点火"的图像
   - 原因：只能从数据统计中学习，不理解物理世界

2. **幻觉问题（Hallucination）**
   - 例子：ChatGPT可能编造不存在的文献
   - 原因：模型倾向于生成"看起来合理"的内容

3. **数据依赖**
   - 例子：数据不足时性能下降
   - 原因：需要从大量数据中学习

4. **黑盒问题**
   - 例子：无法解释为什么做出某个决策
   - 原因：神经网络内部复杂，难以解释

5. **偏见问题**
   - 例子：人脸识别对深色皮肤准确率较低
   - 原因：训练数据不平衡

### 如何正确看待AI

**AI是工具，不是魔法**：
- ✅ 善用AI提升效率
- ❌ 不要盲目相信AI的输出

**AI是助手，不是替代**：
- ✅ 让AI处理重复性工作
- ✅ 人类专注于创造性和决策性工作

**持续学习，与AI共舞**：
- ✅ 学习如何使用AI工具
- ✅ 理解AI的能力边界

---

## 实战练习

### 练习1：寻找身边的AI

**任务**：在一天内，记录你遇到的所有AI应用。

**示例记录表**：

| 时间 | 场景 | AI应用 | AI类型 |
|------|------|--------|--------|
| 早上8:00 | 刷抖音 | 视频推荐 | 推荐系统 |
| 上午10:00 | 写邮件 | Gmail智能回复 | NLP |
| 中午12:00 | 点外卖 | 餐厅推荐 | 推荐系统 |
| 下午3:00 | 拍照 | 美颜滤镜 | 计算机视觉 |

**提交**：将记录表提交到学习平台。

### 练习2：体验不同的AI工具

**任务**：注册并使用以下AI工具，每个至少10分钟。

1. **对话AI**：ChatGPT / Claude / 文心一言
2. **图像生成**：Midjourney / Stable Diffusion / 文心一格
3. **办公AI**：Notion AI / WPS AI / 飞书智能伙伴

**反思问题**：
- 哪个工具最让你惊喜？为什么？
- 哪个工具让你失望？为什么？
- 你能想到这些工具在工作中的应用场景吗？

---

## 本章小结

在本节中，我们学习了：

1. **AI的定义**：让机器模拟人类智能行为
2. **AI的分类**：ANI（当前）、AGI（未来）、ASI（科幻）
3. **AI的应用**：办公、创意、学习、生活服务
4. **AI的局限**：缺乏常识、幻觉问题、数据依赖
5. **正确态度**：AI是工具，善用但不盲信

**下一节预告**：我们将学习AI的核心技术，了解机器学习、深度学习、NLP等技术的基本原理。

---

## 参考资料

1. **吴恩达《AI For Everyone》**：非技术人员的AI入门课程
2. **李飞飞TED演讲**：《How we''re teaching computers to understand pictures》
3. **《人工智能：现代方法》**：AI经典教材（Stuart Russell著）

---

**恭喜你完成了第一节！** 🎉

在下一节中，我们将深入AI的核心技术，了解机器学习、深度学习等技术的原理。

---

## 1.2 AI核心技术简介

### 学习目标

通过本节学习，你将能够：
- 理解机器学习、深度学习、NLP等核心技术的原理
- 知道这些技术在实际中的应用场景
- 了解不同技术之间的关系

### 1.2.1 机器学习（Machine Learning）

**什么是机器学习？**

传统编程 vs 机器学习：

| 传统编程 | 机器学习 |
|---------|---------|
| 人工编写规则 | 从数据中学习规则 |
| 规则固定 | 规则可自动更新 |
| 适合确定性问题 | 适合复杂、模糊问题 |

**例子：垃圾邮件过滤**

传统编程方式：
\\`\\`\\`
if (邮件包含"中奖") → 垃圾邮件
if (发件人是陌生人) → 垃圾邮件
if (邮件有附件) → 垃圾邮件
\\`\\`\\`

问题：规则太多，无法穷举，容易被绕过。

机器学习方式：
1. 收集大量邮件（标注哪些是垃圾邮件）
2. 训练模型学习特征（词汇、发件人、时间等）
3. 模型自动判断新邮件是否为垃圾邮件

**机器学习的类型**

1. **监督学习（Supervised Learning）**
   - 有标签数据（正确答案）
   - 例子：房价预测、图像分类、垃圾邮件检测

2. **无监督学习（Unsupervised Learning）**
   - 无标签数据（无正确答案）
   - 例子：客户分群、异常检测、数据降维

3. **强化学习（Reinforcement Learning）**
   - 通过试错学习
   - 例子：AlphaGo、游戏AI、机器人控制

### 1.2.2 深度学习（Deep Learning）

**什么是深度学习？**

深度学习是机器学习的一个分支，使用**多层神经网络**模拟人脑的工作方式。

**为什么叫"深度"？**
- 因为神经网络有很多层（深度）
- 每层都学习不同层次的特征

**例子：图像识别**

\\`\\`\\`
输入图像
  ↓
第1层：识别边缘、线条
  ↓
第2层：识别形状、纹理
  ↓
第3层：识别眼睛、鼻子、嘴巴
  ↓
第4层：识别人脸
  ↓
输出：这是谁
\\`\\`\\`

**深度学习的优势**
- 自动特征提取（不需要人工设计特征）
- 处理复杂数据（图像、语音、文本）
- 性能随数据量增加而提升

**深度学习的应用**
- 图像识别：人脸识别、医学影像分析
- 语音识别：Siri、讯飞输入法
- 自然语言处理：机器翻译、文本生成

### 1.2.3 自然语言处理（NLP）

**什么是NLP？**

让计算机理解、处理和生成人类语言。

**NLP的任务**

1. **文本分类**
   - 例子：垃圾邮件检测、情感分析
   - 应用：舆情监控、用户反馈分析

2. **命名实体识别（NER）**
   - 例子：从文本中提取人名、地名、时间
   - 应用：信息抽取、知识图谱

3. **机器翻译**
   - 例子：Google翻译、DeepL
   - 技术：Seq2Seq、Transformer

4. **问答系统**
   - 例子：智能客服、知识问答
   - 技术：检索式、生成式

5. **文本生成**
   - 例子：ChatGPT、自动写新闻
   - 技术：GPT、LLaMA

**大语言模型（LLM）**

2022年ChatGPT发布后，NLP进入大模型时代：
- 参数规模：从亿级到千亿级
- 能力：few-shot learning、in-context learning
- 应用：对话、写作、编程、推理

### 1.2.4 计算机视觉（Computer Vision）

**什么是计算机视觉？**

让计算机"看懂"图像和视频。

**计算机视觉的任务**

1. **图像分类**
   - 例子：识别图片中是猫还是狗
   - 应用：相册分类、内容审核

2. **目标检测**
   - 例子：在图片中框出所有行人
   - 应用：自动驾驶、安防监控

3. **图像分割**
   - 例子：将图片中的每个像素分类
   - 应用：医学影像、背景虚化

4. **人脸识别**
   - 例子：手机人脸解锁
   - 应用：身份验证、寻人

5. **姿态估计**
   - 例子：识别人体关键点
   - 应用：体感游戏、运动分析

**深度学习在CV中的应用**

- CNN（卷积神经网络）：图像分类、目标检测
- YOLO：实时目标检测
- Transformer：视觉大模型（ViT）

### 1.2.5 技术之间的关系

\\`\\`\\`
人工智能（AI）
  ├── 机器学习（ML）
  │     ├── 传统机器学习（决策树、SVM）
  │     └── 深度学习（DL）
  │           ├── 卷积神经网络（CNN）→ 计算机视觉
  │           ├── 循环神经网络（RNN）→ 自然语言处理
  │           └── Transformer → 大语言模型
  └── 其他（知识图谱、规划、推理）
\\`\\`\\`

**关键点**：
- 深度学习是机器学习的一个分支
- CNN主要用于计算机视觉
- Transformer主要用于自然语言处理
- 大语言模型（LLM）是基于Transformer的深度学习模型

---

## 实战练习

### 练习1：技术识别

**任务**：判断以下应用使用了哪种AI技术。

| 应用 | 使用的AI技术 |
|------|-------------|
| 抖音视频推荐 | ？ |
| Siri语音助手 | ？ |
| 人脸识别门禁 | ？ |
| 垃圾邮件过滤 | ？ |
| ChatGPT对话 | ？ |

**提示**：可以参考本节学习的技术分类。

### 练习2：体验不同的AI技术

**任务**：使用以下工具，体验不同的AI技术。

1. **机器学习**：
   - 访问：[Quick, Draw!](https://quickdraw.withgoogle.com/)
   - 体验：神经网络如何识别你画的图

2. **深度学习（CV）**：
   - 访问：[ImageNet Demo](http://image-net.org/challenges/LSVRC/)
   - 体验：图像分类的效果

3. **自然语言处理**：
   - 使用：ChatGPT / 文心一言
   - 体验：让LLM写一首诗

4. **计算机视觉**：
   - 使用：手机相册的人脸识别
   - 体验：看看识别是否准确

---

## 本章小结

在本节中，我们学习了：

1. **机器学习**：从数据中学习规则（监督、无监督、强化学习）
2. **深度学习**：使用多层神经网络（自动特征提取）
3. **自然语言处理**：让计算机理解和生成语言（文本分类、机器翻译、LLM）
4. **计算机视觉**：让计算机看懂图像（分类、检测、分割、识别）
5. **技术关系**：AI > 机器学习 > 深度学习 > 具体应用

**下一节预告**：我们将学习AI在实际生活中的应用场景和案例。

---

**恭喜你完成了第二节！** 🎉

---

## 1.3 AI应用场景与案例

### 学习目标

通过本节学习，你将能够：
- 了解AI在不同行业的应用
- 分析AI如何解决实际问题
- 思考AI在你所在行业的应用潜力

### 1.3.1 AI在互联网行业的应用

**1. 推荐系统**

**原理**：
- 收集用户行为数据（点击、购买、停留时间）
- 分析用户兴趣和相似用户
- 推荐可能感兴趣的内容/商品

**案例**：
- **抖音/快手**：视频推荐
  - 数据：观看历史、点赞、评论、分享
  - 算法：协同过滤、深度学习
  - 效果：用户平均使用时长增加30%

- **淘宝/京东**：商品推荐
  - 数据：浏览历史、购买记录、购物车
  - 算法：个性化推荐、相似商品
  - 效果：转化率提升20%

**2. 搜索引擎**

**原理**：
- 爬虫：收集网页
- 索引：建立倒排索引
- 排序：PageRank、深度学习排序

**案例**：
- **Google/百度**：网页搜索
  - 技术：BERT（理解查询意图）
  - 效果：搜索结果相关性提升

- **Perplexity**：AI搜索
  - 技术：LLM + 检索
  - 效果：直接给出答案，而不是链接

**3. 广告投放**

**原理**：
- 用户画像：年龄、性别、兴趣、消费能力
- 广告匹配：找到最合适的广告
- 竞价排名：实时竞价（RTB）

**案例**：
- **字节跳动**：信息流广告
  - 技术：用户画像 + 实时竞价
  - 效果：点击率提升50%

### 1.3.2 AI在金融行业的应用

**1. 风险控制**

**原理**：
- 收集用户数据（征信、消费、社交）
- 建立风控模型（欺诈检测、信用评分）
- 实时监控（异常检测）

**案例**：
- **蚂蚁金服**：芝麻信用
  - 数据：支付宝交易、社交关系、公共服务
  - 算法：机器学习 + 知识图谱
  - 应用：免押金租车、快速贷款

- **信用卡欺诈检测**
  - 技术：异常检测、图神经网络
  - 效果：减少损失数亿元

**2. 智能投顾**

**原理**：
- 用户风险偏好评估
- 资产配置优化
- 自动调仓

**案例**：
- **Betterment**：智能投顾平台
  - 技术：现代投资组合理论 + AI优化
  - 效果：管理费用降低80%

**3. 量化交易**

**原理**：
- 分析历史数据
- 预测价格走势
- 自动交易

**案例**：
- **文艺复兴科技**：量化基金
  - 技术：隐马尔可夫模型、机器学习
  - 效果：年化收益率39%（1988-2018）

### 1.3.3 AI在医疗行业的应用

**1. 医学影像分析**

**原理**：
- 使用CNN分析医学影像（X光、CT、MRI）
- 辅助医生诊断（病灶检测、良恶性判断）

**案例**：
- **Google DeepMind**：眼底疾病检测
  - 技术：深度学习
  - 效果：准确率超过眼科专家

- **腾讯觅影**：食管癌筛查
  - 技术：计算机视觉
  - 效果：筛查时间从5分钟缩短到3秒

**2. 药物研发**

**原理**：
- 预测分子性质
- 筛选候选药物
- 优化分子结构

**案例**：
- **AlphaFold**：蛋白质结构预测
  - 技术：深度学习
  - 影响：加速药物研发，解决50年难题

- **Insilico Medicine**：AI制药
  - 技术：生成式模型
  - 效果：将药物研发时间从4-6年缩短到18个月

**3. 智能诊断**

**原理**：
- 分析病历、症状
- 辅助诊断（疾病预测、治疗方案推荐）

**案例**：
- **IBM Watson for Oncology**：肿瘤治疗推荐
  - 技术：知识图谱 + 机器学习
  - 应用：为医生提供治疗方案参考

### 1.3.4 AI在制造业的应用

**1. 质量检测**

**原理**：
- 使用计算机视觉检测产品缺陷
- 自动分拣（合格/不合格）

**案例**：
- **富士康**：AI质检
  - 技术：深度学习 + 工业相机
  - 效果：检测准确率99.9%，人力成本降低70%

**2. 预测性维护**

**原理**：
- 收集设备传感器数据
- 预测设备故障
- 提前维护

**案例**：
- **西门子**：风力发电机预测性维护
  - 技术：时间序列分析 + 机器学习
  - 效果：停机时间减少30%，维护成本降低25%

**3. 供应链优化**

**原理**：
- 预测需求
- 优化库存
- 智能调度

**案例**：
- **京东**：智能供应链
  - 技术：需求预测 + 路径优化
  - 效果：库存周转天数降低30%

### 1.3.5 AI在交通行业的应用

**1. 自动驾驶**

**原理**：
- 感知：激光雷达、摄像头、雷达
- 决策：路径规划、障碍物规避
- 控制：加速、刹车、转向

**案例**：
- **Tesla**：辅助驾驶（Autopilot）
  - 技术：计算机视觉 + 强化学习
  - 级别：L2-L3（部分自动驾驶）

- **Waymo**：无人出租车
  - 技术：激光雷达 + 高精度地图
  - 级别：L4（高度自动驾驶）

**2. 智能交通**

**原理**：
- 实时路况分析
- 智能信号灯控制
- 拥堵预测

**案例**：
- **阿里云城市大脑**：杭州交通优化
  - 技术：视频分析 + 强化学习
  - 效果：通行时间缩短15%

### 1.3.6 AI在创意行业的应用

**1.  AI绘画**

**工具**：
- Midjourney
- Stable Diffusion
- DALL-E 3

**应用**：
- 游戏原画设计
- 广告海报生成
- 概念设计

**案例**：
- **《西游记》动画**：使用AI生成背景
  - 效果：制作时间缩短50%

**2. AI写作**

**工具**：
- ChatGPT
- Claude
- 文心一言

**应用**：
- 新闻稿生成
- 营销文案
- 小说创作

**案例**：
- **GPT-4写小说**：获得文学比赛奖项
  - 争议：AI生成内容的版权问题

**3. AI音乐**

**工具**：
- Suno AI
- AIVA

**应用**：
- 背景音乐生成
- 广告配乐
- 游戏音效

### 1.3.7 AI应用的共同特点

**1. 数据驱动**
- 需要大量数据训练模型
- 数据质量决定模型效果

**2. 场景 specific**
- AI在特定场景下表现出色
- 需要针对场景定制模型

**3. 人机协作**
- AI辅助人类，而不是完全替代
- 人类负责创造性、决策性工作

**4. 持续迭代**
- 模型需要不断更新
- 在线学习、A/B测试

---

## 实战练习

### 练习1：分析你所在行业的AI应用

**任务**：
1. 选择一个你感兴趣的行业（如教育、零售、物流）
2. 调研该行业的AI应用案例
3. 分析：
   - 使用了什么AI技术？
   - 解决了什么问题？
   - 效果如何？
   - 有什么局限性？

**提交**：写一份500字的调研报告。

### 练习2：设计一个AI应用

**任务**：
1. 找一个生活中的痛点（如：找不到停车位、外卖送餐慢）
2. 设计一个AI解决方案
3. 描述：
   - 问题定义
   - 使用的AI技术
   - 数据来源
   - 预期效果

**示例**：
- 问题：城市停车难
- 方案：AI停车引导系统
- 技术：计算机视觉（车位检测）+ 推荐系统（引导到空车位）
- 数据：摄像头实时视频
- 效果：减少找车位时间50%

---

## 本章小结

在本节中，我们学习了AI在不同行业的应用：

1. **互联网**：推荐系统、搜索引擎、广告投放
2. **金融**：风险控制、智能投顾、量化交易
3. **医疗**：医学影像、药物研发、智能诊断
4. **制造**：质量检测、预测性维护、供应链优化
5. **交通**：自动驾驶、智能交通
6. **创意**：AI绘画、AI写作、AI音乐

**AI应用的共同特点**：
- 数据驱动
- 场景specific
- 人机协作
- 持续迭代

**下一章预告**：我们将学习如何使用主流AI工具（ChatGPT、Midjourney等）提升工作效率。

---

**恭喜你完成了第1章！** 🎉🎉🎉

在接下来的章节中，我们将进入实战环节，学习如何使用这些AI工具。

---

## 第2章：AI工具实战

### 第1节：对话AI工具（ChatGPT、Claude、文心一言）

#### 学习目标

通过本节学习，你将能够：
- 注册并使用主流对话AI工具
- 掌握有效的提示词（Prompt）编写技巧
- 使用对话AI提升工作效率

#### 2.1.1 主流对话AI工具对比

| 工具 | 开发商 | 特点 | 适用场景 | 费用 |
|------|--------|------|----------|------|
| **ChatGPT** | OpenAI | 最强通用能力，插件生态 | 写作、编程、翻译 | 免费/$20/月 |
| **Claude** | Anthropic | 长文本处理，安全性高 | 文档分析、总结 | 免费/$20/月 |
| **文心一言** | 百度 | 中文优化，本土化 | 中文写作、搜索 | 免费 |
| **讯飞星火** | 科大讯飞 | 语音交互强 | 语音对话、教育 | 免费 |
| **Gemini** | Google | 多模态（文本+图像） | 图像理解、搜索 | 免费 |

#### 2.1.2 注册与使用

**ChatGPT注册步骤**：

1. 访问：[chat.openai.com](https://chat.openai.com)
2. 注册账号（需要海外手机号或虚拟号码）
3. 选择版本：
   - Free：GPT-3.5，有限额
   - Plus：$20/月，GPT-4，优先访问
4. 开始对话

**国内替代方案**：

如果使用不了ChatGPT，可以使用：
- 文心一言：[yiyan.baidu.com](https://yiyan.baidu.com)
- 讯飞星火：[xinghuo.xfyun.cn](https://xinghuo.xfyun.cn)
- 智谱清言：[chatglm.cn](https://chatglm.cn)

#### 2.1.3 提示词（Prompt）编写技巧

**什么是提示词？**

提示词是你给AI的指令，质量直接影响AI的输出。

**基本原则**：

1. **明确具体**
   - ❌ 差："写一篇文章"
   - ✅ 好："写一篇800字关于人工智能在教育的应用的文章，面向普通读者，语言通俗易懂"

2. **提供背景**
   - 例子："你是一位资深的产品经理，请帮我写一个AI产品的需求文档..."

3. **指定格式**
   - 例子："用Markdown格式输出，包含标题、列表、代码块"

4. **分步指示**
   - 例子："第一步：分析问题；第二步：提出解决方案；第三步：总结"

**高级技巧**：

1. **角色扮演**
   \\`\\`\\`
   你是一位经验丰富的Python程序员，请帮我优化以下代码...
   \\`\\`\\`

2. **Few-shot Learning**
   \\`\\`\\`
   请将以下句子翻译成英文：

   示例1：我爱学习 → I love learning
   示例2：AI改变世界 → AI changes the world

   现在请翻译：深度学习很有趣
   \\`\\`\\`

3. **链式思考（Chain-of-Thought）**
   \\`\\`\\`
   请一步步思考并回答：

   问题：一个篮子里有10个苹果，拿走2个，还剩几个？

   思考过程：
   1. 篮子里原有10个苹果
   2. 拿走了2个
   3. 剩余 = 10 - 2 = 8
   答案：8个
   \\`\\`\\`

4. **指定输出格式**
   \\`\\`\\`
   请用JSON格式输出：

   {
     "name": "产品名称",
     "price": "价格",
     "description": "描述"
   }
   \\`\\`\\`

#### 2.1.4 实战案例

**案例1：写作助手**

**任务**：写一篇产品介绍文案

**提示词**：
\\`\\`\\`
你是一位资深的市场营销专家，请为一款AI写作工具写一段产品介绍文案。

要求：
1. 突出产品的核心功能（智能写作、语法检查、多语言支持）
2. 面向企业用户（提升效率、降低成本）
3. 语言简洁有力，300字以内
4. 包含一句slogan

请用Markdown格式输出。
\\`\\`\\`

**案例2：代码助手**

**任务**：编写一个Python爬虫

**提示词**：
\\`\\`\\`
你是一位Python专家，请帮我写一个爬虫程序，抓取豆瓣电影Top250的信息。

要求：
1. 使用requests和BeautifulSoup
2. 抓取电影名称、评分、导演、年份
3. 保存到CSV文件
4. 添加注释
5. 处理异常（网络错误、解析错误）

请一步步解释代码。
\\`\\`\\`

**案例3：学习助手**

**任务**：解释复杂概念

**提示词**：
\\`\\`\\`
你是一位耐心的老师，请用通俗易懂的语言解释"区块链"技术。

要求：
1. 使用类比（比如：账本、Excel表格）
2. 分步骤解释（从比特币到区块链）
3. 举例说明应用场景
4. 指出优势和局限性

适合完全没有技术背景的人理解。
\\`\\`\\`

#### 2.1.5 常见问题与解决

**问题1：AI回答不准确**

**原因**：
- 提示词不够明确
- 模型幻觉（编造信息）

**解决**：
- 优化提示词（更具体、提供上下文）
- 要求AI给出信息来源
- 交叉验证（用多个AI对比）

**问题2：AI回答太笼统**

**原因**：
- 提示词缺乏约束

**解决**：
- 指定字数、格式、风格
- 要求给出具体例子

**问题3：AI拒绝回答**

**原因**：
- 触及安全边界（暴力、色情、政治）
- 版权问题

**解决**：
- 调整提问方式
- 使用合规的替代方案

---

## 实战练习

### 练习1：提示词编写

**任务**：为每个场景编写一个好的提示词。

| 场景 | 你的提示词 |
|------|-----------|
| 让AI帮你写一封求职邮件 | ？ |
| 让AI帮你制定学习计划 | ？ |
| 让AI帮你debug代码 | ？ |

**提交**：将提示词和AI的回复截图提交。

### 练习2：使用ChatGPT提升工作效率

**任务**：
1. 选择一个工作任务（如：写周报、做PPT大纲、分析数据）
2. 使用ChatGPT完成这个任务
3. 记录：
   - 你使用的提示词
   - AI的输出质量（1-5分）
   - 你需要多少人工修改
   - 总共节省了多少时间

**提交**：写一份使用心得（300字）。

---

## 本章小结

在本节中，我们学习了：

1. **主流对话AI工具**：ChatGPT、Claude、文心一言等
2. **提示词编写技巧**：明确具体、提供背景、指定格式、分步指示
3. **高级技巧**：角色扮演、Few-shot、链式思考
4. **实战案例**：写作助手、代码助手、学习助手

**关键要点**：
- 提示词质量决定AI输出质量
- 好的提示词 = 明确具体 + 提供背景 + 指定格式
- AI是助手，需要人工审核和修改

**下一节预告**：我们将学习AI绘画工具（Midjourney、Stable Diffusion）。

---

---

## 2.2 AI绘画与创意工具

### 学习目标

通过本节学习，你将能够：
- 使用Midjourney、Stable Diffusion等AI绘画工具
- 掌握AI绘画的提示词技巧
- 使用AI生成营销素材、产品原型图

### 2.2.1 主流AI绘画工具对比

| 工具 | 开发商 | 特点 | 适用场景 | 费用 |
|------|--------|------|----------|------|
| **Midjourney** | Midjourney Inc. | 艺术风格强，社区活跃 | 概念设计、艺术创作 | $10-60/月 |
| **Stable Diffusion** | Stability AI | 开源，可本地部署 | 商业应用、定制训练 | 免费（需GPU） |
| **DALL-E 3** | OpenAI | 与ChatGPT集成，易用 | 快速生成、迭代 | ChatGPT Plus包含 |
| **文心一格** | 百度 | 中文提示词，本土化 | 中文场景、国内访问 | 免费/付费 |
| **通义万相** | 阿里 | 阿里生态集成 | 电商场景 | 免费/付费 |

### 2.2.2 Midjourney使用指南

**注册与入门**：

1. 访问：[midjourney.com](https://www.midjourney.com)
2. 加入Discord服务器
3. 在');

-- ====== L2: 机器学习基础 ======
INSERT INTO courses(id,title,level,description,thumbnail,"totalDuration",tags) VALUES(
  'l2-machine-learning-basics','机器学习基础',2,'系统学习机器学习的核心概念、经典算法和实战技能。适合有基础数学背景、想深入AI技术的学习者和产品经理。','https://example.com/thumbnails/l2-ml-basics.jpg',10800,ARRAY['机器学习','监督学习','无监督学习','模型评估','Scikit-learn']::text[]);

INSERT INTO chapters(id,"courseId",title,description,"order") VALUES('l2-ch1','l2-machine-learning-basics','第1章：机器学习概论','理解机器学习的定义、类型、工作流程和数学基础',1);
INSERT INTO sections(id,"chapterId",title,description,"order",duration,content) VALUES('l2-ch1-sec1','l2-ch1','1.1 什么是机器学习','从传统编程到机器学习，理解机器学习的核心思想',1,1800,'
# 1.1 什么是机器学习

## 学习目标

通过本节学习，你将能够：
- 理解机器学习的定义和核心思想
- 区分传统编程和机器学习
- 了解机器学习的类型和应用场景

---

## 1.1.1 从传统编程到机器学习

### 传统编程方式

**问题：如何识别垃圾邮件？**

传统编程方式：

\\`\\`\\`
if (邮件包含"中奖") → 垃圾邮件
if (邮件包含"免费") → 垃圾邮件
if (发件人是陌生人) → 垃圾邮件
if (邮件有附件且后缀是.exe) → 垃圾邮件
else → 正常邮件
\\`\\`\\`

**问题**：
1. **规则复杂**：垃圾邮件的特征太多，无法穷举
2. **规则脆弱**：垃圾邮件发送者可以轻易绕过规则（如：用"免■费"代替"免费"）
3. **维护困难**：需要不断更新规则

### 机器学习方式

**思路**：让计算机从数据中学习规则

\\`\\`\\`
输入：大量邮件（标注哪些是垃圾邮件）
  ↓
学习：自动学习垃圾邮件的特征
  ↓
输出：一个模型（可以预测新邮件是否为垃圾邮件）
\\`\\`\\`

**优势**：
1. **自适应**：随着新数据的输入，模型可以自动更新
2. **处理复杂模式**：可以学习人类难以描述的复杂特征
3. **泛化能力强**：可以处理未见过的案例

### 对比总结

| 传统编程 | 机器学习 |
|---------|---------|
| 人工编写规则 | 从数据中学习规则 |
| 规则固定 | 规则可自动更新 |
| 适合确定性问题 | 适合复杂、模糊问题 |
| 需要领域专家 | 需要数据专家 |

---

## 1.1.2 机器学习的定义

### 学术定义

> **机器学习**（Machine Learning）是人工智能的一个分支，研究如何让计算机从数据中学习，而不需要显式编程。
> 
> — Tom Mitchell《Machine Learning》

**更形式化的定义**：

一个计算机程序被称为可以学习，如果它在任务T上的性能（用P衡量），随着经验E的增加而提高。

**例子**：垃圾邮件过滤
- **任务T**：识别垃圾邮件
- **性能P**：分类准确率
- **经验E**：历史邮件数据

### 通俗理解

> 机器学习 = 从数据中找到模式（Pattern），并用模式进行预测或决策。

**核心要素**：
1. **数据**：学习的原材料
2. **模型**：学习的结果（数学函数）
3. **算法**：学习的方法（如何找到最佳模型）
4. **预测**：模型的应用

---

## 1.1.3 机器学习的类型

### 按学习方式分类

**1. 监督学习（Supervised Learning）**

**定义**：使用**有标签**的数据训练模型。

**例子**：
- 输入：邮件（特征） + 标签（是否为垃圾邮件）
- 目标：学习一个函数 $f(x) = y$，其中 $x$ 是邮件特征，$y$ 是标签

**常见任务**：
- **分类（Classification）**：预测离散标签
  - 例子：垃圾邮件检测、图像分类、疾病诊断
- **回归（Regression）**：预测连续值
  - 例子：房价预测、股票价格预测、气温预测

**算法**：
- 线性模型：线性回归、逻辑回归
- 树模型：决策树、随机森林、XGBoost
- 支持向量机（SVM）
- 神经网络

**2. 无监督学习（Unsupervised Learning）**

**定义**：使用**无标签**的数据训练模型。

**例子**：
- 输入：客户数据（年龄、收入、消费记录）
- 目标：发现数据中的结构（如：客户分群）

**常见任务**：
- **聚类（Clustering）**：将相似的数据分组
  - 例子：客户分群、图像分割、异常检测
- **降维（Dimensionality Reduction）**：减少特征数量
  - 例子：数据可视化、特征压缩、去噪
- **关联规则学习（Association Rule Learning）**
  - 例子：购物篮分析（"买尿布的人也会买啤酒"）

**算法**：
- 聚类：K-Means、层次聚类、DBSCAN
- 降维：PCA、t-SNE、AutoEncoder

**3. 强化学习（Reinforcement Learning）**

**定义**：通过**试错**学习最优策略。

**例子**：
- 智能体（Agent）在环境（Environment）中采取行动（Action）
- 环境给出奖励（Reward）或惩罚
- 目标：最大化累计奖励

**常见任务**：
- 游戏AI：AlphaGo、Dota 2 AI
- 机器人控制：行走、抓取
- 推荐系统：动态调整推荐策略

**算法**：
- Q-Learning
- Policy Gradient
- Actor-Critic
- Deep Q-Network (DQN)

### 按模型类型分类

**1. 参数模型（Parametric Models）**

- 假设数据符合某种分布
- 学习的是**有限的参数**
- 例子：线性回归、逻辑回归、SVM

**优点**：简单、快速
**缺点**：如果假设不成立，性能差

**2. 非参数模型（Non-parametric Models）**

- 不对数据分布做假设
- 模型复杂度随数据量增加而增加
- 例子：KNN、决策树、核方法

**优点**：灵活、适应性强
**缺点**：计算慢、容易过拟合

---

## 1.1.4 机器学习的工作流程

\\`\\`\\`
1. 数据收集
   ↓
2. 数据预处理（清洗、转换、特征工程）
   ↓
3. 划分数据集（训练集、验证集、测试集）
   ↓
4. 选择算法
   ↓
5. 训练模型
   ↓
6. 评估模型
   ↓
7. 调参（Hyperparameter Tuning）
   ↓
8. 部署模型
   ↓
9. 监控和维护
\\`\\`\\`

### 详细步骤

**步骤1：数据收集**

- 数据来源：数据库、API、爬虫、公开数据集
- 数据质量：准确性、完整性、一致性

**步骤2：数据预处理**

- 数据清洗：处理缺失值、异常值、重复值
- 数据转换：标准化、归一化、编码（One-Hot、Label Encoding）
- 特征工程：特征选择、特征提取、特征构造

**步骤3：划分数据集**

- **训练集（Training Set）**：用于训练模型（60-80%）
- **验证集（Validation Set）**：用于调参（10-20%）
- **测试集（Test Set）**：用于评估最终模型（10-20%）

**步骤4：选择算法**

- 考虑因素：数据量、特征类型、任务类型、可解释性要求

**步骤5：训练模型**

- 使用训练集训练模型
- 优化算法：梯度下降、随机梯度下降

**步骤6：评估模型**

- 使用测试集评估模型性能
- 分类指标：准确率、精确率、召回率、F1-score、AUC
- 回归指标：MSE、RMSE、MAE、$R^2$

**步骤7：调参**

- 网格搜索（Grid Search）
- 随机搜索（Random Search）
- 贝叶斯优化

**步骤8：部署模型**

- 保存模型（pickle、joblib、ONNX）
- 部署为API（Flask、FastAPI）
- 监控模型性能

**步骤9：监控和维护**

- 模型漂移（Model Drift）
- 数据漂移（Data Drift）
- 定期重新训练

---

## 1.1.5 机器学习的应用

### 1. 图像识别

- **任务**：识别图像中的物体
- **应用**：人脸识别、医学影像分析、自动驾驶
- **算法**：CNN（卷积神经网络）

### 2. 自然语言处理

- **任务**：理解和生成文本
- **应用**：机器翻译、情感分析、智能客服
- **算法**：RNN、Transformer、BERT、GPT

### 3. 推荐系统

- **任务**：推荐用户可能感兴趣的物品
- **应用**：电商推荐、视频推荐、音乐推荐
- **算法**：协同过滤、矩阵分解、深度学习

### 4. 金融风控

- **任务**：预测风险
- **应用**：信用卡欺诈检测、贷款违约预测
- **算法**：逻辑回归、随机森林、XGBoost

### 5. 医疗诊断

- **任务**：辅助诊断疾病
- **应用**：癌症检测、疾病预测
- **算法**：深度学习、SVM、随机森林

---

## 实战练习

### 练习1：识别机器学习任务

**任务**：判断以下任务属于哪种机器学习类型（监督学习、无监督学习、强化学习）

1. 根据历史房价数据预测新房价
2. 将客户分为不同的群体
3. 训练一个AI玩围棋
4. 识别图片中的猫和狗
5. 发现购物篮中的关联规则

**答案**：
1. 监督学习（回归）
2. 无监督学习（聚类）
3. 强化学习
4. 监督学习（分类）
5. 无监督学习（关联规则）

### 练习2：设计一个机器学习项目

**任务**：
1. 选择一个你感兴趣的问题（如：预测房价、识别垃圾邮件、客户分群）
2. 描述：
   - 这是什么类型的机器学习问题？
   - 需要什么数据？
   - 如何评估模型？
3. 写一份项目提案（300字）

---

## 本章小结

在本节中，我们学习了：

1. **传统编程 vs 机器学习**：机器学习从数据中学习规则
2. **机器学习的定义**：从数据中找到模式，用于预测或决策
3. **机器学习的类型**：
   - 监督学习（有标签）：分类、回归
   - 无监督学习（无标签）：聚类、降维
   - 强化学习（试错）：游戏AI、机器人控制
4. **机器学习的工作流程**：数据收集 → 预处理 → 训练 → 评估 → 部署
5. **机器学习的应用**：图像识别、NLP、推荐系统、风控、医疗

**关键要点**：
- 机器学习的核心是"从数据中学习"
- 不同类型的任务需要不同的算法
- 机器学习是一个迭代的过程

**下一节预告**：我们将学习机器学习的数学基础（线性代数、概率论、微积分）。

---

**恭喜你完成了第1章第1节！** 🎉

---

## 1.2 数学基础

### 学习目标

通过本节学习，你将能够：
- 理解机器学习所需的数学基础
- 掌握线性代数、概率论、微积分的核心概念
- 为后续算法学习打下基础

### 1.2.1 线性代数

线性代数是机器学习的基础，因为数据通常表示为向量和矩阵。

#### 向量（Vector）

**定义**：一个有方向和大小的量，可以表示为一列数。

\\`\\`\\`
$\\\\mathbf{x} = \\\\begin{bmatrix} x_1 \\\\\\\\ x_2 \\\\\\\\ \\\\vdots \\\\\\\\ x_n \\\\end{bmatrix}$
\\`\\`\\`

**例子**：
- 一张28×28的图片可以表示为一个784维的向量
- 一个用户的年龄、收入、消费可以表示为一个3维向量

**运算**：
1. **加法**：$\\\\mathbf{x} + \\\\mathbf{y} = \\\\begin{bmatrix} x_1 + y_1 \\\\\\\\ x_2 + y_2 \\\\\\\\ \\\\vdots \\\\end{bmatrix}$
2. **数乘**：$c \\\\cdot \\\\mathbf{x} = \\\\begin{bmatrix} c \\\\cdot x_1 \\\\\\\\ c \\\\cdot x_2 \\\\\\\\ \\\\vdots \\\\end{bmatrix}$
3. **点积（内积）**：$\\\\mathbf{x} \\\\cdot \\\\mathbf{y} = x_1 y_1 + x_2 y_2 + \\\\cdots + x_n y_n$

**应用**：
- 计算相似度（余弦相似度）
- 线性回归

#### 矩阵（Matrix）

**定义**：一个二维数组。

\\`\\`\\`
$A = \\\\begin{bmatrix} a_{11} & a_{12} & \\\\cdots & a_{1n} \\\\\\\\ a_{21} & a_{22} & \\\\cdots & a_{2n} \\\\\\\\ \\\\vdots & \\\\vdots & \\\\ddots & \\\\vdots \\\\\\\\ a_{m1} & a_{m2} & \\\\cdots & a_{mn} \\\\end{bmatrix}$
\\`\\`\\`

**例子**：
- 数据集：每行是一个样本，每列是一个特征
- 图像：灰度图像是一个矩阵，彩色图像是三个矩阵（RGB）

**运算**：
1. **加法**：$A + B$（对应元素相加）
2. **乘法**：$AB$（矩阵乘法）
3. **转置**：$A^T$
4. **逆矩阵**：$A^{-1}$

**应用**：
- 神经网络的前向传播
- 协方差矩阵

#### 特征值与特征向量

**定义**：对于一个方阵 $A$，如果存在一个向量 $\\\\mathbf{v}$ 和一个标量 $\\\\lambda$，使得：

\\`\\`\\`
$A\\\\mathbf{v} = \\\\lambda \\\\mathbf{v}$
\\`\\`\\`

那么 $\\\\mathbf{v}$ 是特征向量，$\\\\lambda$ 是特征值。

**应用**：
- PCA（主成分分析）
- 推荐系统

---

### 1.2.2 概率论

概率论用于建模不确定性和推理。

#### 基本概念

**1. 随机变量**

- 离散随机变量：取值有限或可数（如：掷骰子的结果）
- 连续随机变量：取值连续（如：身高、体重）

**2. 概率分布**

- **离散分布**：
  - 伯努利分布（Bernoulli）：一次试验，成功/失败
  - 二项分布（Binomial）：$n$ 次独立试验，成功次数
  - 泊松分布（Poisson）：单位时间内的事件次数

- **连续分布**：
  - 均匀分布（Uniform）
  - 正态分布（Gaussian）：$f(x) = \\\\frac{1}{\\\\sqrt{2\\\\pi}\\\\sigma} e^{-\\\\frac{(x-\\\\mu)^2}{2\\\\sigma^2}}$
  - 指数分布（Exponential）

**3. 条件概率**

\\`\\`\\`
$P(A|B) = \\\\frac{P(A \\\\cap B)}{P(B)}$
\\`\\`\\`

**例子**：
- $P(垃圾邮件 | 包含"中奖") = \\\\frac{P(垃圾邮件 \\\\cap 包含"中奖")}{P(包含"中奖")}$

**4. 贝叶斯定理**

\\`\\`\\`
$P(A|B) = \\\\frac{P(B|A) P(A)}{P(B)}$
\\`\\`\\`

**应用**：
- 朴素贝叶斯分类器
- 垃圾邮件过滤

#### 期望与方差

**期望（Expected Value）**：

\\`\\`\\`
$E[X] = \\\\sum_x x P(X=x)$  （离散）
$E[X] = \\\\int_{-\\\\infty}^{\\\\infty} x f(x) dx$  （连续）
\\`\\`\\`

**方差（Variance）**：

\\`\\`\\`
$Var(X) = E[(X - E[X])^2]$
\\`\\`\\`

**应用**：
- 线性回归的损失函数（均方误差）
- 模型评估

---

### 1.2.3 微积分

微积分用于优化（找到最优参数）。

#### 导数（Derivative）

**定义**：函数在某一点的变化率。

\\`\\`\\`
$f''(x) = \\\\lim_{h \\\\to 0} \\\\frac{f(x+h) - f(x)}{h}$
\\`\\`\\`

**例子**：
- $f(x) = x^2$ → $f''(x) = 2x$

**应用**：
- 梯度下降（找到损失函数的最小值）

#### 偏导数（Partial Derivative）

**定义**：多变量函数对某一个变量的导数。

\\`\\`\\`
$\\\\frac{\\\\partial f}{\\\\partial x}$
\\`\\`\\`

**例子**：
- $f(x, y) = x^2 + y^2$
- $\\\\frac{\\\\partial f}{\\\\partial x} = 2x$
- $\\\\frac{\\\\partial f}{\\\\partial y} = 2y$

**应用**：
- 梯度下降（多维）

#### 梯度（Gradient）

**定义**：所有偏导数的向量。

\\`\\`\\`
$\\\\nabla f = \\\\begin{bmatrix} \\\\frac{\\\\partial f}{\\\\partial x_1} \\\\\\\\ \\\\frac{\\\\partial f}{\\\\partial x_2} \\\\\\\\ \\\\vdots \\\\\\\\ \\\\frac{\\\\partial f}{\\\\partial x_n} \\\\end{bmatrix}$
\\`\\`\\`

**应用**：
- 梯度下降：$\\\\theta = \\\\theta - \\\\alpha \\\\nabla J(\\\\theta)$

#### 链式法则（Chain Rule）

**定义**：复合函数的导数。

\\`\\`\\`
$\\\\frac{dz}{dx} = \\\\frac{dz}{dy} \\\\cdot \\\\frac{dy}{dx}$
\\`\\`\\`

**应用**：
- 反向传播（Backpropagation）

---

## 实战练习

### 练习1：线性代数计算

**任务**：计算以下向量和矩阵运算。

1. $\\\\mathbf{x} = \\\\begin{bmatrix} 1 \\\\\\\\ 2 \\\\end{bmatrix}, \\\\mathbf{y} = \\\\begin{bmatrix} 3 \\\\\\\\ 4 \\\\end{bmatrix}$，计算 $\\\\mathbf{x} + \\\\mathbf{y}$ 和 $\\\\mathbf{x} \\\\cdot \\\\mathbf{y}$

2. $A = \\\\begin{bmatrix} 1 & 2 \\\\\\\\ 3 & 4 \\\\end{bmatrix}, B = \\\\begin{bmatrix} 5 & 6 \\\\\\\\ 7 & 8 \\\\end{bmatrix}$，计算 $A + B$ 和 $AB$

**答案**：
1. $\\\\mathbf{x} + \\\\mathbf{y} = \\\\begin{bmatrix} 4 \\\\\\\\ 6 \\\\end{bmatrix}, \\\\mathbf{x} \\\\cdot \\\\mathbf{y} = 1 \\\\cdot 3 + 2 \\\\cdot 4 = 11$
2. $A + B = \\\\begin{bmatrix} 6 & 8 \\\\\\\\ 10 & 12 \\\\end{bmatrix}, AB = \\\\begin{bmatrix} 19 & 22 \\\\\\\\ 43 & 50 \\\\end{bmatrix}$

### 练习2：概率计算

**任务**：使用贝叶斯定理计算以下概率。

**问题**：某疾病的患病率为1%，检测准确率为99%（即：患者检测为阳性的概率99%，健康人检测为阴性的概率99%）。如果一个人检测为阳性，他实际患病的概率是多少？

**解答**：
- 设 $D$ 为患病，$T$ 为检测阳性
- $P(D) = 0.01$
- $P(T|D) = 0.99$
- $P(T|\\\\neg D) = 0.01$
- 求 $P(D|T)$

使用贝叶斯定理：

\\`\\`\\`
$P(D|T) = \\\\frac{P(T|D) P(D)}{P(T)}$
$P(T) = P(T|D) P(D) + P(T|\\\\neg D) P(\\\\neg D) = 0.99 \\\\cdot 0.01 + 0.01 \\\\cdot 0.99 = 0.0198$
$P(D|T) = \\\\frac{0.99 \\\\cdot 0.01}{0.0198} = 0.5$
\\`\\`\\`

**结论**：即使检测为阳性，实际患病的概率只有50%！

---

## 本章小结

在本节中，我们学习了机器学习所需的数学基础：

1. **线性代数**：向量、矩阵、特征值
2. **概率论**：概率分布、条件概率、贝叶斯定理
3. **微积分**：导数、偏导数、梯度、链式法则

**关键要点**：
- 线性代数用于数据表示和运算
- 概率论用于建模不确定性
- 微积分用于优化

**下一节预告**：我们将学习Python和环境搭建（NumPy、Pandas、Scikit-learn）。

---

**恭喜你完成了第1章第2节！** 🎉

---

## 1.3 Python与环境搭建

### 学习目标

通过本节学习，你将能够：
- 安装Python和必要的库
- 使用Jupyter Notebook进行机器学习开发
- 掌握NumPy、Pandas、Matplotlib的基础操作
- 使用Scikit-learn进行机器学习

### 1.3.1 Python安装

**为什么选择Python？**

1. **简单易学**：语法简洁，适合初学者
2. **生态丰富**：有大量机器学习库
3. **社区活跃**：问题容易找到解决方案

**安装Python**

**方法1：从官网下载**

1. 访问：[python.org](https://www.python.org)
2. 下载最新版本（推荐Python 3.9+）
3. 安装时勾选"Add Python to PATH"

**方法2：使用Anaconda（推荐）**

Anaconda是一个Python发行版，包含了大量科学计算库。

1. 访问：[anaconda.com](https://www.anaconda.com)
2. 下载Anaconda（Python 3.x版本）
3. 安装

**验证安装**

\\`\\`\\`bash
python --version
# 输出：Python 3.9.x

pip --version
# 输出：pip x.x.x
\\`\\`\\`

### 1.3.2 开发环境：Jupyter Notebook

**为什么使用Jupyter Notebook？**

1. **交互式**：可以逐块运行代码
2. **可视化**：可以直接显示图表
3. **文档化**：可以混合代码、文本、公式、图像

**安装Jupyter Notebook**

\\`\\`\\`bash
# 如果使用Anaconda，Jupyter已经包含
# 否则，使用pip安装
pip install jupyter
\\`\\`\\`

**启动Jupyter Notebook**

\\`\\`\\`bash
jupyter notebook
\\`\\`\\`

浏览器会自动打开：[http://localhost:8888](http://localhost:8888)

**Jupyter Notebook基本操作**

| 快捷键 | 功能 |
|--------|------|
| ');

-- ====== L3: 深度学习与计算机视觉 ======
INSERT INTO courses(id,title,level,description,thumbnail,"totalDuration",tags) VALUES(
  'l3-deep-learning-cv','深度学习与计算机视觉',3,'深入学习神经网络、CNN、计算机视觉应用。适合有机器学习基础、想学习深度学习和CV的开发者。','https://example.com/thumbnails/l3-dl-cv.jpg',14400,ARRAY['深度学习','CNN','计算机视觉','PyTorch','图像识别']::text[]);

INSERT INTO chapters(id,"courseId",title,description,"order") VALUES('l3-ch1','l3-deep-learning-cv','第1章：神经网络基础','理解神经网络的工作原理，掌握前向传播和反向传播',1);
INSERT INTO sections(id,"chapterId",title,description,"order",duration,content) VALUES('l3-ch1-sec1','l3-ch1','1.1 感知机与多层网络','从感知机到多层感知机，理解神经网络的基本结构',1,1800,'
# 1.1 感知机与多层网络

## 学习目标

通过本节学习，你将能够：
- 理解感知机模型
- 掌握多层感知机（MLP）
- 理解激活函数的作用
- 使用PyTorch搭建神经网络

---

## 1.1.1 感知机（Perceptron）

**什么是感知机？**

感知机是最早的人工神经元模型，由Frank Rosenblatt于1957年提出。

**模型**

\\`\\`\\`
输出 = 
  \\\\begin{cases}
    1 & \\\\text{if } \\\\mathbf{w}^T \\\\mathbf{x} + b > 0 \\\\\\\\
    0 & \\\\text{otherwise}
  \\\\end{cases}
\\`\\`\\`

其中：
- $\\\\mathbf{x}$ 是输入向量
- $\\\\mathbf{w}$ 是权重向量
- $b$ 是偏置

**训练算法**

1. 初始化权重
2. 对于每个样本：
   - 计算输出
   - 如果分类错误，更新权重：
     - $w_i = w_i + \\\\eta (y - \\\\hat{y}) x_i$
     - $b = b + \\\\eta (y - \\\\hat{y})$
3. 重复，直到收敛或达到最大迭代次数

**局限性**

感知机只能处理线性可分问题（如：AND、OR），不能处理非线性问题（如：XOR）。

## 1.1.2 多层感知机（MLP）

**为什么需要多层？**

单层感知机只能处理线性问题，多层可以处理非线性问题。

**结构**

多层感知机（Multi-Layer Perceptron, MLP）包含：
1. **输入层**：接收输入
2. **隐藏层**：一个或多个隐藏层
3. **输出层**：输出结果

\\`\\`\\`
输入层 → 隐藏层 → 输出层
\\`\\`\\`

**前向传播（Forward Propagation）**

\\`\\`\\`
$\\\\mathbf{h} = \\\\sigma(\\\\mathbf{W}_1 \\\\mathbf{x} + \\\\mathbf{b}_1)$
$\\\\mathbf{y} = \\\\sigma(\\\\mathbf{W}_2 \\\\mathbf{h} + \\\\mathbf{b}_2)$
\\`\\`\\`

其中：
- $\\\\sigma$ 是激活函数
- $\\\\mathbf{h}$ 是隐藏层的输出

## 1.1.3 激活函数

**为什么需要激活函数？**

如果没有激活函数，多层网络等价于单层网络（线性变换的组合还是线性变换）。

激活函数引入非线性，使得神经网络可以逼近任意函数。

**常用激活函数**

**1. Sigmoid**

\\`\\`\\`
$\\\\sigma(x) = \\\\frac{1}{1 + e^{-x}}$
\\`\\`\\`

**优点**：
- 输出在(0, 1)，可以解释为概率

**缺点**：
- 梯度消失（当|x|很大时，梯度接近0）
- 输出不是零中心的

**2. Tanh**

\\`\\`\\`
$\\\\tanh(x) = \\\\frac{e^x - e^{-x}}{e^x + e^{-x}}$
\\`\\`\\`

**优点**：
- 输出在(-1, 1)，零中心

**缺点**：
- 梯度消失

**3. ReLU（Rectified Linear Unit）**

\\`\\`\\`
$\\\\text{ReLU}(x) = \\\\max(0, x)$
\\`\\`\\`

**优点**：
- 计算快
- 缓解梯度消失

**缺点**：
- Dead ReLU（当x < 0时，梯度为0）

**4. Leaky ReLU**

\\`\\`\\`
$\\\\text{Leaky ReLU}(x) = \\\\max(0.01x, x)$
\\`\\`\\`

**优点**：
- 解决Dead ReLU问题

**5. Softmax**

用于多分类问题的输出层。

\\`\\`\\`
$\\\\text{Softmax}(z_i) = \\\\frac{e^{z_i}}{\\\\sum_{j=1}^K e^{z_j}}$
\\`\\`\\`

## 1.1.4 使用PyTorch搭建神经网络

**安装PyTorch**

\\`\\`\\`bash
pip install torch torchvision
\\`\\`\\`

**代码示例**

\\`\\`\\`python
import torch
import torch.nn as nn
import torch.optim as optim

# 定义神经网络
class MLP(nn.Module):
    def __init__(self, input_size, hidden_size, output_size):
        super(MLP, self).__init__()
        self.fc1 = nn.Linear(input_size, hidden_size)
        self.relu = nn.ReLU()
        self.fc2 = nn.Linear(hidden_size, output_size)
        self.sigmoid = nn.Sigmoid()
    
    def forward(self, x):
        x = self.fc1(x)
        x = self.relu(x)
        x = self.fc2(x)
        x = self.sigmoid(x)
        return x

# 创建模型
input_size = 784   # MNIST图像：28×28 = 784
hidden_size = 128
output_size = 10    # 10个数字

model = MLP(input_size, hidden_size, output_size)
print(model)

# 定义损失函数和优化器
criterion = nn.CrossEntropyLoss()
optimizer = optim.Adam(model.parameters(), lr=0.001)

# 训练模型（伪代码）
for epoch in range(10):
    for batch_x, batch_y in dataloader:
        # 前向传播
        outputs = model(batch_x)
        loss = criterion(outputs, batch_y)
        
        # 反向传播
        optimizer.zero_grad()
        loss.backward()
        optimizer.step()
    
    print(f''Epoch {epoch+1}, Loss: {loss.item()}'')
\\`\\`\\`

---

## 实战练习

### 练习1：实现感知机

**任务**：
1. 从零实现感知机（不使用PyTorch）
2. 在AND、OR、XOR数据集上测试
3. 分析为什么感知机不能处理XOR

### 练习2：搭建MLP

**任务**：
1. 使用PyTorch搭建MLP
2. 在MNIST数据集上训练
3. 尝试不同的激活函数（ReLU、Tanh、Sigmoid）
4. 对比性能

---

## 本章小结

在本节中，我们学习了：

1. **感知机**：最早的神经元模型
2. **多层感知机（MLP）**：输入层、隐藏层、输出层
3. **激活函数**：Sigmoid、Tanh、ReLU、Softmax
4. **使用PyTorch**：搭建神经网络

**关键要点**：
- 感知机只能处理线性问题
- 多层网络 + 非线性激活函数可以处理任意复杂的函数
- ReLU是最常用的激活函数

**下一节预告**：我们将学习前向传播与反向传播。

---

**恭喜你完成了第1章第1节！** 🎉

---

## 1.2 前向传播与反向传播

### 学习目标

通过本节学习，你将能够：
- 理解前向传播
- 掌握反向传播算法
- 使用PyTorch自动求导
- 理解计算图

### 1.2.1 前向传播（Forward Propagation）

**直观理解**

前向传播是从输入到输出的计算过程。

**例子：MLP**

\\`\\`\\`
输入：$\\\\mathbf{x}$
  ↓
隐藏层：$\\\\mathbf{h} = \\\\sigma(\\\\mathbf{W}_1 \\\\mathbf{x} + \\\\mathbf{b}_1)$
  ↓
输出层：$\\\\mathbf{y} = \\\\text{Softmax}(\\\\mathbf{W}_2 \\\\mathbf{h} + \\\\mathbf{b}_2)$
  ↓
损失：$L = \\\\text{CrossEntropy}(\\\\mathbf{y}, \\\\mathbf{y}_{true})$
\\`\\`\\`

**使用PyTorch**

\\`\\`\\`python
import torch
import torch.nn as nn

# 定义模型
model = nn.Sequential(
    nn.Linear(784, 128),
    nn.ReLU(),
    nn.Linear(128, 10),
    nn.Softmax(dim=1)
)

# 前向传播
x = torch.randn(64, 784)  # 64个样本，每个784维
y = model(x)  # 前向传播
print(y.shape)  # [64, 10]
\\`\\`\\`

### 1.2.2 反向传播（Backpropagation）

**直观理解**

反向传播是从输出到输入，计算损失对每个参数的梯度。

**原理：链式法则**

\\`\\`\\`
如果 $z = f(y)$ 且 $y = g(x)$，那么：
$\\\\frac{\\\\partial z}{\\\\partial x} = \\\\frac{\\\\partial z}{\\\\partial y} \\\\cdot \\\\frac{\\\\partial y}{\\\\partial x}$
\\`\\`\\`

**反向传播算法**

1. 前向传播：计算输出和损失
2. 反向传播：计算梯度
   - 输出层 → 隐藏层 → 输入层
   - 使用链式法则
3. 更新参数：
   - $w = w - \\\\eta \\\\frac{\\\\partial L}{\\\\partial w}$

**例子**

假设有一个简单的神经网络：$y = w_2 \\\\sigma(w_1 x + b_1) + b_2$

损失：$L = \\\\frac{1}{2} (y - t)^2$

梯度：
- $\\\\frac{\\\\partial L}{\\\\partial w_2} = (y - t) \\\\sigma(w_1 x + b_1)$
- $\\\\frac{\\\\partial L}{\\\\partial w_1} = (y - t) w_2 \\\\sigma''(w_1 x + b_1) x$

### 1.2.3 使用PyTorch自动求导

PyTorch使用**autograd**自动计算梯度。

**代码示例**

\\`\\`\\`python
import torch

# 创建张量
x = torch.randn(3, requires_grad=True)
w = torch.randn(3, requires_grad=True)
b = torch.randn(1, requires_grad=True)

# 前向传播
y = torch.sum(w * x) + b

# 反向传播
y.backward()

# 查看梯度
print(x.grad)  # ∂y/∂x
print(w.grad)  # ∂y/∂w
print(b.grad)  # ∂y/∂b

# 更新参数（手动）
learning_rate = 0.01
with torch.no_grad():
    w -= learning_rate * w.grad
    b -= learning_rate * b.grad
    
    # 清零梯度
    w.grad.zero_()
    b.grad.zero_()
\\`\\`\\`

**使用优化器**

\\`\\`\\`python
import torch.optim as optim

# 创建优化器
optimizer = optim.SGD([w, b], lr=0.01)

# 训练循环
for epoch in range(100):
    # 前向传播
    y = torch.sum(w * x) + b
    loss = torch.sum((y - target)**2)
    
    # 反向传播
    optimizer.zero_grad()
    loss.backward()
    
    # 更新参数
    optimizer.step()
\\`\\`\\`

### 1.2.4 计算图（Computational Graph）

**什么是计算图？**

计算图是计算过程的可视化表示。

**例子**

\\`\\`\\`
$z = (w_1 x_1 + w_2 x_2) + (w_3 x_3)$
\\`\\`\\`

计算图：

\\`\\`\\`
x1 ─┐
    ├─→ * ─┐
w1 ─┘    │
          ├─→ + ─→ z
x2 ─┐    │
    ├─→ * ─┘
w2 ─┘
\\`\\`\\`

**PyTorch的动态计算图**

PyTorch使用动态计算图（每次前向传播都会重新构建计算图）。

\\`\\`\\`python
import torch

x = torch.randn(3, requires_grad=True)

# 第一次前向传播
y = x * 2
y.backward(torch.ones_like(y))

# 第二次前向传播（计算图会重新构建）
y = x * 3
y.backward(torch.ones_like(y))
\\`\\`\\`

---

## 实战练习

### 练习1：手动实现反向传播

**任务**：
1. 从零实现反向传播（不使用PyTorch autograd）
2. 对一个简单的神经网络（如：MLP）
3. 对比手动实现的版本和PyTorch的版本

### 练习2：可视化计算图

**任务**：
1. 使用TensorBoard或PyTorchViz可视化计算图
2. 分析计算图的结构

---

## 本章小结

在本节中，我们学习了：

1. **前向传播**：从输入到输出的计算
2. **反向传播**：使用链式法则计算梯度
3. **PyTorch自动求导**：');
INSERT INTO sections(id,"chapterId",title,description,"order",duration,content) VALUES('SGD','l3-ch1','','',0,0,'');

-- ====== L4: 自然语言处理与Transformer ======
INSERT INTO courses(id,title,level,description,thumbnail,"totalDuration",tags) VALUES(
  'l4-nlp-transformer','自然语言处理与Transformer',4,'深入学习NLP、Transformer、大语言模型。适合有深度学习基础、想学习NLP和LLM的开发者。','https://example.com/thumbnails/l4-nlp-transformer.jpg',18000,ARRAY['NLP','Transformer','BERT','GPT','大语言模型']::text[]);

INSERT INTO chapters(id,"courseId",title,description,"order") VALUES('l4-ch1','l4-nlp-transformer','第1章：NLP基础','理解NLP的基本概念，掌握文本预处理、词嵌入等技术',1);
INSERT INTO sections(id,"chapterId",title,description,"order",duration,content) VALUES('l4-ch1-sec1','l4-ch1','1.1 文本预处理','学习文本清洗、分词、去除停用词等预处理技术',1,1800,'
# 1.1 文本预处理

## 学习目标

通过本节学习，你将能够：
- 理解文本预处理的重要性
- 掌握文本清洗、分词、去除停用词等技术
- 使用NLTK、spaCy等工具进行文本预处理
- 了解中文分词的特殊性

---

## 1.1.1 为什么需要文本预处理？

**问题**：
- 原始文本包含噪声（标点符号、特殊字符、停用词等）
- 计算机无法直接理解文本
- 需要将文本转换为数值形式

**解决方案**：文本预处理
- 清洗文本
- 分词（Tokenization）
- 去除停用词
- 词形还原（Lemmatization）/词干提取（Stemming）
- 转换为数值表示

## 1.1.2 文本预处理的步骤

### 1. 文本清洗（Text Cleaning）

**任务**：
- 去除HTML标签
- 去除标点符号
- 去除特殊字符
- 转换为小写

**代码示例**（使用正则表达式）：

\\`\\`\\`python
import re

def clean_text(text):
    # 去除HTML标签
    text = re.sub(r''<[^>]+>'', '''', text)
    # 去除标点符号和特殊字符
    text = re.sub(r''[^a-zA-Z0-9\\s]'', '''', text)
    # 转换为小写
    text = text.lower()
    return text

text = "<p>Hello, World! This is a test.</p>"
cleaned_text = clean_text(text)
print(cleaned_text)  # hello world this is a test
\\`\\`\\`

### 2. 分词（Tokenization）

**任务**：将文本分割成单词或子词

**英文分词**（使用NLTK）：

\\`\\`\\`python
import nltk
from nltk.tokenize import word_tokenize

text = "Hello, world! This is a test."
tokens = word_tokenize(text)
print(tokens)  # [''Hello'', '','', ''world'', ''!'', ''This'', ''is'', ''a'', ''test'', ''.'']
\\`\\`\\`

**中文分词**（使用jieba）：

\\`\\`\\`python
import jieba

text = "我爱自然语言处理"
tokens = jieba.lcut(text)
print(tokens)  # [''我'', ''爱'', ''自然语言处理'']
\\`\\`\\`

### 3. 去除停用词（Stop Words Removal）

**停用词**：在文本中频繁出现但对语义贡献不大的词（如：the, is, at, which）

**代码示例**（使用NLTK）：

\\`\\`\\`python
from nltk.corpus import stopwords
import nltk

nltk.download(''stopwords'')
stop_words = set(stopwords.words(''english''))

text = "This is a simple example of stop words removal."
tokens = word_tokenize(text)
filtered_tokens = [word for word in tokens if word.lower() not in stop_words]
print(filtered_tokens)  # [''simple'', ''example'', ''stop'', ''words'', ''removal'', ''.'']
\\`\\`\\`

### 4. 词形还原和词干提取

**词形还原（Lemmatization）**：将单词还原为原型（如：running → run, better → good）

**词干提取（Stemming）**：将单词还原为词根（如：running → run, better → bett）

**代码示例**：

\\`\\`\\`python
from nltk.stem import WordNetLemmatizer, PorterStemmer

# 词形还原
lemmatizer = WordNetLemmatizer()
print(lemmatizer.lemmatize(''running'', pos=''v''))  # run
print(lemmatizer.lemmatize(''better'', pos=''a''))   # good

# 词干提取
stemmer = PorterStemmer()
print(stemmer.stem(''running''))  # run
print(stemmer.stem(''better''))   # better（词干提取可能不准确）
\\`\\`\\`

## 1.1.3 使用spaCy进行文本预处理

**spaCy**是一个强大的NLP库，集成了多种预处理功能。

**代码示例**：

\\`\\`\\`python
import spacy

# 加载英文模型
nlp = spacy.load(''en_core_web_sm'')

text = "Apple is looking at buying U.K. startup for $1 billion."
doc = nlp(text)

# 分词
tokens = [token.text for token in doc]
print(tokens)

# 去除停用词和标点符号
filtered_tokens = [token.text for token in doc if not token.is_stop and not token.is_punct]
print(filtered_tokens)

# 词形还原
lemmas = [token.lemma_ for token in doc]
print(lemmas)
\\`\\`\\`

## 1.1.4 中文文本预处理

**挑战**：
- 中文没有空格分隔单词
- 需要专门的分词工具

**工具**：
- **jieba**：最常用的中文分词工具
- **pkuseg**：北京大学开发的分词工具
- **THULAC**：清华大学开发的分词工具

**代码示例**（使用jieba）：

\\`\\`\\`python
import jieba
import re

def clean_chinese_text(text):
    # 去除标点符号和特殊字符
    text = re.sub(r''[^\\u4e00-\\u9fa5\\s]'', '''', text)
    return text

def tokenize_chinese_text(text):
    # 分词
    tokens = jieba.lcut(text)
    # 去除停用词（需要自己准备中文停用词表）
    stop_words = set([''的'', ''了'', ''在'', ''是'', ''我'', ''有'', ''和'', ''就'', ''不'', ''人'', ''都'', ''一'', ''一个'', ''上'', ''也'', ''很'', ''到'', ''说'', ''要'', ''去'', ''你'', ''会'', ''着'', ''没有'', ''看'', ''好'', ''自己'', ''这''])
    filtered_tokens = [token for token in tokens if token not in stop_words]
    return filtered_tokens

text = "我爱自然语言处理！这是一个很好的工具。"
cleaned_text = clean_chinese_text(text)
tokens = tokenize_chinese_text(cleaned_text)
print(tokens)  # [''我'', ''爱'', ''自然语言处理'', ''这是'', ''一个'', ''很'', ''好'', ''工具'']
\\`\\`\\`

---

## 实战练习

### 练习1：英文文本预处理

**任务**：
1. 使用NLTK对一段英文文本进行预处理
2. 包括：文本清洗、分词、去除停用词、词形还原

### 练习2：中文文本预处理

**任务**：
1. 使用jieba对一段中文文本进行预处理
2. 包括：文本清洗、分词、去除停用词

---

## 本章小结

在本节中，我们学习了：
1. **文本预处理的重要性**：清洗噪声，转换为数值形式
2. **文本预处理的步骤**：清洗、分词、去除停用词、词形还原
3. **工具**：NLTK、spaCy、jieba
4. **中英文预处理的差异**

**关键要点**：
- 文本预处理是NLP的基础
- 英文有空格分隔，中文需要分词
- 选择合适的工具可以提高效率

**下一节预告**：我们将学习词嵌入（Word Embedding）。

---

**恭喜你完成了第1章第1节！** 🎉
        ');
INSERT INTO sections(id,"chapterId",title,description,"order",duration,content) VALUES('l4-ch1-sec2','l4-ch1','1.2 词嵌入（Word Embedding）','学习词嵌入技术，包括Word2Vec、GloVe、FastText等',2,1800,'
# 1.2 词嵌入（Word Embedding）

## 学习目标

通过本节学习，你将能够：
- 理解词嵌入的原理
- 掌握Word2Vec、GloVe、FastText等算法
- 使用预训练的词嵌入模型
- 了解词嵌入的应用场景

---

## 1.2.1 什么是词嵌入？

**问题**：
- 计算机无法直接理解单词
- 需要将单词转换为数值形式

**解决方案**：词嵌入（Word Embedding）
- 将单词映射到连续的向量空间
- 语义相似的单词在向量空间中距离较近

**示例**：
- king - man + woman ≈ queen
- 词嵌入可以捕捉语义关系

## 1.2.2 常用的词嵌入算法

### 1. Word2Vec

**原理**：
- 使用神经网络学习词嵌入
- 两种模型：
  - **CBOW**（Continuous Bag of Words）：根据上下文预测中心词
  - **Skip-gram**：根据中心词预测上下文

**代码示例**（使用Gensim）：

\\`\\`\\`python
from gensim.models import Word2Vec

# 准备语料
sentences = [
    [''this'', ''is'', ''a'', ''sentence''],
    [''this'', ''is'', ''another'', ''sentence'']
]

# 训练Word2Vec模型
model = Word2Vec(sentences, vector_size=100, window=5, min_count=1, workers=4)

# 获取词向量
vector = model.wv[''sentence'']
print(vector.shape)  # (100,)

# 找相似词
similar_words = model.wv.most_similar(''sentence'', topn=5)
print(similar_words)
\\`\\`\\`

### 2. GloVe

**原理**：
- 基于全局词频统计
- 训练目标：词的共现概率比

**使用预训练的GloVe词嵌入**：

\\`\\`\\`python
import numpy as np

# 加载预训练的GloVe词嵌入
def load_glove_embeddings(glove_file):
    embeddings = {}
    with open(glove_file, ''r'', encoding=''utf-8'') as f:
        for line in f:
            values = line.split()
            word = values[0]
            vector = np.asarray(values[1:], dtype=''float32'')
            embeddings[word] = vector
    return embeddings

embeddings = load_glove_embeddings(''glove.6B.100d.txt'')
vector = embeddings[''sentence'']
print(vector.shape)  # (100,)
\\`\\`\\`

### 3. FastText

**原理**：
- 基于子词（subword）的嵌入
- 可以处理未登录词（out-of-vocabulary words）

**代码示例**（使用Gensim）：

\\`\\`\\`python
from gensim.models import FastText

# 准备语料
sentences = [
    [''this'', ''is'', ''a'', ''sentence''],
    [''this'', ''is'', ''another'', ''sentence'']
]

# 训练FastText模型
model = FastText(sentences, vector_size=100, window=5, min_count=1, workers=4)

# 获取词向量
vector = model.wv[''sentence'']
print(vector.shape)  # (100,)

# FastText可以处理未登录词
vector = model.wv[''sentencer'']  # 未登录词
print(vector.shape)  # (100,)
\\`\\`\\`

## 1.2.3 使用预训练的词嵌入模型

**常用的预训练词嵌入模型**：
- **Word2Vec**：Google提供的预训练模型
- **GloVe**：Stanford提供的预训练模型
- **FastText**：Facebook提供的预训练模型

**在PyTorch中使用预训练词嵌入**：

\\`\\`\\`python
import torch
import torch.nn as nn

# 假设我们已经有了词嵌入矩阵（从预训练模型加载）
embedding_matrix = torch.randn(10000, 100)  # 10000个词，每个词100维

# 创建嵌入层
embedding_layer = nn.Embedding.from_pretrained(embedding_matrix, freeze=False)

# 使用嵌入层
input_ids = torch.LongTensor([[1, 2, 3], [4, 5, 6]])  # 词的ID
embeddings = embedding_layer(input_ids)
print(embeddings.shape)  # torch.Size([2, 3, 100])
\\`\\`\\`

## 1.2.4 词嵌入的应用场景

**应用**：
1. **文本分类**：将文本转换为词嵌入，然后输入分类器
2. **情感分析**：使用词嵌入捕捉情感信息
3. **机器翻译**：将源语言和目标语言的词映射到同一空间
4. **推荐系统**：使用词嵌入表示用户和物品

---

## 实战练习

### 练习1：训练Word2Vec模型

**任务**：
1. 使用Gensim训练一个Word2Vec模型
2. 在自定义数据集上训练
3. 测试词向量的质量（找相似词）

### 练习2：使用预训练的GloVe词嵌入

**任务**：
1. 加载预训练的GloVe词嵌入
2. 在文本分类任务上使用
3. 对比使用和不使用预训练词嵌入的性能

---

## 本章小结

在本节中，我们学习了：
1. **词嵌入的原理**：将单词映射到向量空间
2. **常用算法**：Word2Vec、GloVe、FastText
3. **使用预训练模型**：加载和使用预训练词嵌入
4. **应用场景**：文本分类、情感分析等

**关键要点**：
- 词嵌入可以捕捉语义关系
- 预训练词嵌入可以提升模型性能
- FastText可以处理未登录词

**下一节预告**：我们将学习循环神经网络（RNN）。

---

**恭喜你完成了第1章第2节！** 🎉
        ');
INSERT INTO chapters(id,"courseId",title,description,"order") VALUES('l4-ch2','l4-nlp-transformer','第2章：循环神经网络与注意力机制','理解RNN、LSTM、GRU，掌握注意力机制',2);
INSERT INTO sections(id,"chapterId",title,description,"order",duration,content) VALUES('l4-ch2-sec1','l4-ch2','2.1 循环神经网络（RNN）','理解RNN的原理，掌握RNN的训练方法',1,1800,'
# 2.1 循环神经网络（RNN）

## 学习目标

通过本节学习，你将能够：
- 理解RNN的原理
- 掌握RNN的结构
- 使用PyTorch实现RNN
- 了解RNN的应用场景

---

## 2.1.1 为什么需要RNN？

**问题**：
- 传统神经网络假设输入是独立的
- 但序列数据（如文本、语音）有顺序关系

**解决方案**：循环神经网络（Recurrent Neural Network, RNN）
- 可以处理序列数据
- 有"记忆"能力

## 2.1.2 RNN的结构

**结构**：
- 输入：$x_1, x_2, ..., x_t$
- 隐藏状态：$h_t = tanh(W_h h_{t-1} + W_x x_t + b)$
- 输出：$y_t = W_y h_t + c$

**PyTorch实现**：

\\`\\`\\`python
import torch
import torch.nn as nn

class RNN(nn.Module):
    def __init__(self, input_size, hidden_size, output_size):
        super(RNN, self).__init__()
        self.hidden_size = hidden_size
        self.rnn = nn.RNN(input_size, hidden_size, batch_first=True)
        self.fc = nn.Linear(hidden_size, output_size)
    
    def forward(self, x):
        # x shape: (batch_size, sequence_length, input_size)
        h0 = torch.zeros(1, x.size(0), self.hidden_size).to(x.device)
        out, _ = self.rnn(x, h0)
        out = self.fc(out[:, -1, :])  # 只取最后一个时间步的输出
        return out

# 使用示例
model = RNN(input_size=100, hidden_size=128, output_size=10)
x = torch.randn(32, 50, 100)  # (batch_size, sequence_length, input_size)
output = model(x)
print(output.shape)  # torch.Size([32, 10])
\\`\\`\\`

## 2.1.3 RNN的训练：BPTT

**BPTT（Backpropagation Through Time）**：
- 将RNN展开为多个时间步
- 然后应用反向传播

**问题**：
- 梯度消失（Gradient Vanishing）
- 梯度爆炸（Gradient Exploding）

## 2.1.4 RNN的应用场景

**应用**：
1. **语言模型**：预测下一个词
2. **文本生成**：生成文本
3. **机器翻译**：seq2seq模型
4. **语音识别**：将语音转换为文本

---

## 实战练习

### 练习1：使用RNN进行文本分类

**任务**：
1. 使用RNN对IMDB电影评论进行情感分类
2. 对比RNN和全连接网络的性能

### 练习2：实现简单的语言模型

**任务**：
1. 使用RNN训练一个语言模型
2. 生成文本

---

## 本章小结

在本节中，我们学习了：
1. **RNN的原理**：处理序列数据
2. **RNN的结构**：隐藏状态、输出
3. **PyTorch实现**：使用nn.RNN
4. **应用场景**：语言模型、文本生成等

**关键要点**：
- RNN可以处理序列数据
- RNN有梯度消失和梯度爆炸问题
- 使用PyTorch可以轻松实现RNN

**下一节预告**：我们将学习长短期记忆网络（LSTM）。

---

**恭喜你完成了第2章第1节！** 🎉
        ');
INSERT INTO sections(id,"chapterId",title,description,"order",duration,content) VALUES('l4-ch2-sec2','l4-ch2','2.2 长短期记忆网络（LSTM）','理解LSTM的原理，掌握LSTM的结构',2,1800,'
# 2.2 长短期记忆网络（LSTM）

## 学习目标

通过本节学习，你将能够：
- 理解LSTM的原理
- 掌握LSTM的结构
- 使用PyTorch实现LSTM
- 了解LSTM的应用场景

---

## 2.2.1 为什么需要LSTM？

**问题**：
- RNN有梯度消失问题
- 无法捕捉长期依赖关系

**解决方案**：长短期记忆网络（Long Short-Term Memory, LSTM）
- 引入门控机制
- 可以捕捉长期依赖关系

## 2.2.2 LSTM的结构

**结构**：
- 遗忘门（Forget Gate）：$f_t = \\sigma(W_f \\cdot [h_{t-1}, x_t] + b_f)$
- 输入门（Input Gate）：$i_t = \\sigma(W_i \\cdot [h_{t-1}, x_t] + b_i)$
- 候选值（Candidate Value）：$\\tilde{C}_t = tanh(W_C \\cdot [h_{t-1}, x_t] + b_C)$
- 细胞状态（Cell State）：$C_t = f_t * C_{t-1} + i_t * \\tilde{C}_t$
- 输出门（Output Gate）：$o_t = \\sigma(W_o \\cdot [h_{t-1}, x_t] + b_o)$
- 隐藏状态（Hidden State）：$h_t = o_t * tanh(C_t)$

**PyTorch实现**：

\\`\\`\\`python
import torch
import torch.nn as nn

class LSTM(nn.Module):
    def __init__(self, input_size, hidden_size, output_size):
        super(LSTM, self).__init__()
        self.hidden_size = hidden_size
        self.lstm = nn.LSTM(input_size, hidden_size, batch_first=True)
        self.fc = nn.Linear(hidden_size, output_size)
    
    def forward(self, x):
        # x shape: (batch_size, sequence_length, input_size)
        h0 = torch.zeros(1, x.size(0), self.hidden_size).to(x.device)
        c0 = torch.zeros(1, x.size(0), self.hidden_size).to(x.device)
        out, _ = self.lstm(x, (h0, c0))
        out = self.fc(out[:, -1, :])  # 只取最后一个时间步的输出
        return out

# 使用示例
model = LSTM(input_size=100, hidden_size=128, output_size=10)
x = torch.randn(32, 50, 100)  # (batch_size, sequence_length, input_size)
output = model(x)
print(output.shape)  # torch.Size([32, 10])
\\`\\`\\`

## 2.2.3 LSTM vs. RNN

**优势**：
- 可以捕捉长期依赖关系
- 缓解梯度消失问题

**劣势**：
- 计算量更大
- 参数更多

## 2.2.4 LSTM的应用场景

**应用**：
1. **语言模型**：预测下一个词
2. **机器翻译**：seq2seq模型
3. **语音识别**：将语音转换为文本
4. **时间序列预测**：预测股票价格、天气等

---

## 实战练习

### 练习1：使用LSTM进行文本分类

**任务**：
1. 使用LSTM对IMDB电影评论进行情感分类
2. 对比LSTM和RNN的性能

### 练习2：使用LSTM进行时间序列预测

**任务**：
1. 使用LSTM预测股票价格
2. 对比LSTM和ARIMA的性能

---

## 本章小结

在本节中，我们学习了：
1. **LSTM的原理**：引入门控机制
2. **LSTM的结构**：遗忘门、输入门、输出门
3. **PyTorch实现**：使用nn.LSTM
4. **应用场景**：语言模型、机器翻译等

**关键要点**：
- LSTM可以捕捉长期依赖关系
- LSTM比RNN计算量更大
- 使用PyTorch可以轻松实现LSTM

**下一节预告**：我们将学习注意力机制（Attention Mechanism）。

---

**恭喜你完成了第2章第2节！** 🎉
        ');
INSERT INTO sections(id,"chapterId",title,description,"order",duration,content) VALUES('l4-ch2-sec3','l4-ch2','2.3 注意力机制（Attention Mechanism）','理解注意力机制的原理，掌握Self-Attention',3,1800,'
# 2.3 注意力机制（Attention Mechanism）

## 学习目标

通过本节学习，你将能够：
- 理解注意力机制的原理
- 掌握Self-Attention、Multi-Head Attention
- 使用PyTorch实现注意力机制
- 了解注意力机制的应用场景

---

## 2.3.1 为什么需要注意力机制？

**问题**：
- RNN/LSTM只能捕捉局部依赖关系
- 无法并行计算

**解决方案**：注意力机制（Attention Mechanism）
- 可以捕捉全局依赖关系
- 可以并行计算

## 2.3.2 注意力机制的原理

**基本公式**：

$Attention(Q, K, V) = softmax(\\frac{QK^T}{\\sqrt{d_k}})V$

其中：
- $Q$（Query）：查询
- $K$（Key）：键
- $V$（Value）：值
- $d_k$：缩放因子

**PyTorch实现**：

\\`\\`\\`python
import torch
import torch.nn as nn
import torch.nn.functional as F

def attention(query, key, value):
    d_k = query.size(-1)
    scores = torch.matmul(query, key.transpose(-2, -1)) / torch.sqrt(torch.tensor(d_k, dtype=torch.float))
    attention_weights = F.softmax(scores, dim=-1)
    output = torch.matmul(attention_weights, value)
    return output, attention_weights

# 使用示例
Q = torch.randn(1, 5, 64)  # (batch_size, sequence_length, d_model)
K = torch.randn(1, 5, 64)
V = torch.randn(1, 5, 64)

output, attention_weights = attention(Q, K, V)
print(output.shape)  # torch.Size([1, 5, 64])
print(attention_weights.shape)  # torch.Size([1, 5, 5])
\\`\\`\\`

## 2.3.3 Self-Attention

**原理**：
- Q、K、V都来自同一个输入

**PyTorch实现**：

\\`\\`\\`python
class SelfAttention(nn.Module):
    def __init__(self, d_model):
        super(SelfAttention, self).__init__()
        self.d_model = d_model
        self.W_q = nn.Linear(d_model, d_model)
        self.W_k = nn.Linear(d_model, d_model)
        self.W_v = nn.Linear(d_model, d_model)
    
    def forward(self, x):
        # x shape: (batch_size, sequence_length, d_model)
        Q = self.W_q(x)
        K = self.W_k(x)
        V = self.W_v(x)
        
        d_k = self.d_model
        scores = torch.matmul(Q, K.transpose(-2, -1)) / torch.sqrt(torch.tensor(d_k, dtype=torch.float))
        attention_weights = F.softmax(scores, dim=-1)
        output = torch.matmul(attention_weights, V)
        return output, attention_weights

# 使用示例
model = SelfAttention(d_model=64)
x = torch.randn(1, 5, 64)
output, attention_weights = model(x)
print(output.shape)  # torch.Size([1, 5, 64])
\\`\\`\\`

## 2.3.4 Multi-Head Attention

**原理**：
- 使用多个注意力头
- 每个头学习不同的表示

**PyTorch实现**：

\\`\\`\\`python
class MultiHeadAttention(nn.Module):
    def __init__(self, d_model, num_heads):
        super(MultiHeadAttention, self).__init__()
        self.d_model = d_model
        self.num_heads = num_heads
        self.d_k = d_model // num_heads
        
        self.W_q = nn.Linear(d_model, d_model)
        self.W_k = nn.Linear(d_model, d_model)
        self.W_v = nn.Linear(d_model, d_model)
        self.W_o = nn.Linear(d_model, d_model)
    
    def forward(self, x):
        batch_size, sequence_length, d_model = x.size()
        
        # Linear projections
        Q = self.W_q(x).view(batch_size, sequence_length, self.num_heads, self.d_k).transpose(1, 2)
        K = self.W_k(x).view(batch_size, sequence_length, self.num_heads, self.d_k).transpose(1, 2)
        V = self.W_v(x).view(batch_size, sequence_length, self.num_heads, self.d_k).transpose(1, 2)
        
        # Attention
        scores = torch.matmul(Q, K.transpose(-2, -1)) / torch.sqrt(torch.tensor(self.d_k, dtype=torch.float))
        attention_weights = F.softmax(scores, dim=-1)
        output = torch.matmul(attention_weights, V)
        
        # Concatenate heads
        output = output.transpose(1, 2).contiguous().view(batch_size, sequence_length, d_model)
        
        # Linear projection
        output = self.W_o(output)
        return output, attention_weights

# 使用示例
model = MultiHeadAttention(d_model=64, num_heads=8)
x = torch.randn(1, 5, 64)
output, attention_weights = model(x)
print(output.shape)  # torch.Size([1, 5, 64])
\\`\\`\\`

## 2.3.5 注意力机制的应用场景

**应用**：
1. **机器翻译**：Seq2Seq with Attention
2. **文本摘要**：捕捉关键信息
3. **图像描述**：Attention-based Image Captioning
4. **Transformer**：完全基于注意力机制

---

## 实战练习

### 练习1：实现Self-Attention

**任务**：
1. 从零实现Self-Attention
2. 测试不同输入的效果

### 练习2：实现Multi-Head Attention

**任务**：
1. 从零实现Multi-Head Attention
2. 对比Single-Head和Multi-Head的效果

---

## 本章小结

在本节中，我们学习了：
1. **注意力机制的原理**：Q、K、V
2. **Self-Attention**：Q、K、V来自同一输入
3. **Multi-Head Attention**：多个注意力头
4. **应用场景**：机器翻译、文本摘要等

**关键要点**：
- 注意力机制可以捕捉全局依赖关系
- Multi-Head Attention可以学习不同的表示
- 注意力机制是Transformer的基础

**下一章预告**：我们将学习Transformer架构。

---

**恭喜你完成了第2章！** 🎉🎉🎉
        ');
INSERT INTO chapters(id,"courseId",title,description,"order") VALUES('l4-ch3','l4-nlp-transformer','第3章：Transformer架构','深入理解Transformer架构，掌握Encoder、Decoder、Position Encoding等',3);
INSERT INTO sections(id,"chapterId",title,description,"order",duration,content) VALUES('l4-ch3-sec1','l4-ch3','3.1 Transformer架构详解','理解Transformer的整体架构，掌握Encoder和Decoder',1,1800,'
# 3.1 Transformer架构详解

## 学习目标

通过本节学习，你将能够：
- 理解Transformer的整体架构
- 掌握Encoder和Decoder的结构
- 理解Position Encoding的作用
- 使用PyTorch实现Transformer

---

## 3.1.1 为什么需要Transformer？

**问题**：
- RNN/LSTM无法并行计算
- 难以捕捉长距离依赖关系

**解决方案**：Transformer
- 完全基于注意力机制
- 可以并行计算
- 可以捕捉长距离依赖关系

## 3.1.2 Transformer的整体架构

**结构**：
- **Encoder**：编码输入序列
- **Decoder**：解码输出序列

**流程图**：

\\`\\`\\`
Input → Encoder (N层) → Encoder Output
                                      ↓
Target → Decoder (N层) → Output
\\`\\`\\`

## 3.1.3 Encoder的结构

**每层包含**：
1. **Multi-Head Attention**
2. **Add & Norm**（残差连接 + Layer Normalization）
3. **Feed Forward Network**
4. **Add & Norm**

**PyTorch实现**：

\\`\\`\\`python
import torch
import torch.nn as nn
import torch.nn.functional as F

class EncoderLayer(nn.Module):
    def __init__(self, d_model, num_heads, d_ff):
        super(EncoderLayer, self).__init__()
        self.self_attn = nn.MultiheadAttention(d_model, num_heads)
        self.feed_forward = nn.Sequential(
            nn.Linear(d_model, d_ff),
            nn.ReLU(),
            nn.Linear(d_ff, d_model)
        )
        self.norm1 = nn.LayerNorm(d_model)
        self.norm2 = nn.LayerNorm(d_model)
    
    def forward(self, x):
        # Multi-Head Attention
        attn_output, _ = self.self_attn(x, x, x)
        x = self.norm1(x + attn_output)
        
        # Feed Forward Network
        ff_output = self.feed_forward(x)
        x = self.norm2(x + ff_output)
        
        return x

# 使用示例
encoder_layer = EncoderLayer(d_model=512, num_heads=8, d_ff=2048)
x = torch.randn(1, 10, 512)  # (batch_size, sequence_length, d_model)
output = encoder_layer(x)
print(output.shape)  # torch.Size([1, 10, 512])
\\`\\`\\`

## 3.1.4 Decoder的结构

**每层包含**：
1. **Masked Multi-Head Attention**（防止看到未来信息）
2. **Add & Norm**
3. **Multi-Head Attention**（接受Encoder的输出）
4. **Add & Norm**
5. **Feed Forward Network**
6. **Add & Norm**

## 3.1.5 Position Encoding

**问题**：
- Transformer没有循环结构，无法捕捉序列的顺序信息

**解决方案**：Position Encoding
- 将位置信息编码到嵌入中

**公式**：

$PE_{(pos, 2i)} = sin(\\frac{pos}{10000^{2i/d_{model}}})$

$PE_{(pos, 2i+1)} = cos(\\frac{pos}{10000^{2i/d_{model}}})$

**PyTorch实现**：

\\`\\`\\`python
class PositionEncoding(nn.Module):
    def __init__(self, d_model, max_len=5000):
        super(PositionEncoding, self).__init__()
        
        pe = torch.zeros(max_len, d_model)
        position = torch.arange(0, max_len).unsqueeze(1)
        div_term = torch.exp(torch.arange(0, d_model, 2) * -(math.log(10000.0) / d_model))
        
        pe[:, 0::2] = torch.sin(position * div_term)
        pe[:, 1::2] = torch.cos(position * div_term)
        
        pe = pe.unsqueeze(0)
        self.register_buffer(''pe'', pe)
    
    def forward(self, x):
        x = x + self.pe[:, :x.size(1)]
        return x

# 使用示例
pos_encoding = PositionEncoding(d_model=512)
x = torch.randn(1, 10, 512)
output = pos_encoding(x)
print(output.shape)  # torch.Size([1, 10, 512])
\\`\\`\\`

---

## 实战练习

### 练习1：实现Transformer Encoder

**任务**：
1. 从零实现Transformer Encoder
2. 测试Encoder的效果

### 练习2：实现Position Encoding

**任务**：
1. 从零实现Position Encoding
2. 可视化Position Encoding

---

## 本章小结

在本节中，我们学习了：
1. **Transformer的整体架构**：Encoder、Decoder
2. **Encoder的结构**：Multi-Head Attention、Feed Forward Network
3. **Decoder的结构**：Masked Multi-Head Attention
4. **Position Encoding**：捕捉序列的顺序信息

**关键要点**：
- Transformer完全基于注意力机制
- Transformer可以并行计算
- Position Encoding用于捕捉序列的顺序信息

**下一节预告**：我们将学习BERT和GPT。

---

**恭喜你完成了第3章第1节！** 🎉
        ');
INSERT INTO sections(id,"chapterId",title,description,"order",duration,content) VALUES('l4-ch3-sec2','l4-ch3','3.2 BERT与GPT','理解BERT和GPT的原理，掌握预训练语言模型',2,1800,'
# 3.2 BERT与GPT

## 学习目标

通过本节学习，你将能够：
- 理解BERT的原理
- 理解GPT的原理
- 掌握预训练语言模型的训练方法
- 使用Hugging Face Transformers库

---

## 3.2.1 为什么需要预训练语言模型？

**问题**：
- 从零训练语言模型需要大量数据和计算资源
- 大多数开发者没有这样的资源

**解决方案**：预训练语言模型（Pre-trained Language Models）
- 在大规模语料上预训练
- 然后微调（Fine-tuning）到下游任务

## 3.2.2 BERT（Bidirectional Encoder Representations from Transformers）

**原理**：
- 基于Transformer Encoder
- 双向语言模型
- 预训练任务：
  1. **Masked Language Modeling (MLM)**：随机掩盖一些词，然后预测这些词
  2. **Next Sentence Prediction (NSP)**：预测两个句子是否连续

**使用Hugging Face Transformers**：

\\`\\`\\`python
from transformers import BertTokenizer, BertModel

# 加载预训练的BERT模型和分词器
tokenizer = BertTokenizer.from_pretrained(''bert-base-uncased'')
model = BertModel.from_pretrained(''bert-base-uncased'')

# 编码文本
text = "Hello, world!"
encoding = tokenizer(text, return_tensors=''pt'')

# 获取BERT的输出
output = model(**encoding)
last_hidden_states = output.last_hidden_state
print(last_hidden_states.shape)  # torch.Size([1, 4, 768])
\\`\\`\\`

## 3.2.3 GPT（Generative Pre-trained Transformer）

**原理**：
- 基于Transformer Decoder
- 单向语言模型（从左到右）
- 预训练任务：**Causal Language Modeling (CLM)**：预测下一个词

**使用Hugging Face Transformers**：

\\`\\`\\`python
from transformers import GPT2Tokenizer, GPT2Model

# 加载预训练的GPT-2模型和分词器
tokenizer = GPT2Tokenizer.from_pretrained(''gpt2'')
model = GPT2Model.from_pretrained(''gpt2'')

# 编码文本
text = "Hello, world!"
encoding = tokenizer(text, return_tensors=''pt'')

# 获取GPT-2的输出
output = model(**encoding)
last_hidden_states = output.last_hidden_state
print(last_hidden_states.shape)  # torch.Size([1, 4, 768])
\\`\\`\\`

## 3.2.4 BERT vs. GPT

| 特性 | BERT | GPT |
|------|------|-----|
| 架构 | Encoder | Decoder |
| 方向 | 双向 | 单向（从左到右） |
| 预训练任务 | MLM + NSP | CLM |
| 适用任务 | 文本分类、问答、NER | 文本生成 |

## 3.2.5 使用Hugging Face Transformers进行微调

**文本分类示例**（使用BERT）：

\\`\\`\\`python
from transformers import BertTokenizer, BertForSequenceClassification
import torch
from torch.utils.data import Dataset, DataLoader
import torch.optim as optim

# 1. 定义数据集
class TextClassificationDataset(Dataset):
    def __init__(self, texts, labels, tokenizer, max_length=512):
        self.texts = texts
        self.labels = labels
        self.tokenizer = tokenizer
        self.max_length = max_length
    
    def __len__(self):
        return len(self.texts)
    
    def __getitem__(self, idx):
        text = self.texts[idx]
        label = self.labels[idx]
        encoding = self.tokenizer(
            text,
            max_length=self.max_length,
            padding=''max_length'',
            truncation=True,
            return_tensors=''pt''
        )
        return {
            ''input_ids'': encoding[''input_ids''].flatten(),
            ''attention_mask'': encoding[''attention_mask''].flatten(),
            ''labels'': torch.tensor(label, dtype=torch.long)
        }

# 2. 加载预训练的BERT模型和分词器
tokenizer = BertTokenizer.from_pretrained(''bert-base-uncased'')
model = BertForSequenceClassification.from_pretrained(''bert-base-uncased'', num_labels=2)

# 3. 准备数据
texts = ["I love this movie!", "This movie is terrible."]
labels = [1, 0]  # 1: positive, 0: negative
dataset = TextClassificationDataset(texts, labels, tokenizer)
dataloader = DataLoader(dataset, batch_size=2, shuffle=True)

# 4. 定义优化器
optimizer = optim.Adam(model.parameters(), lr=2e-5)

# 5. 训练模型
device = torch.device(''cuda'' if torch.cuda.is_available() else ''cpu'')
model = model.to(device)

for epoch in range(3):
    model.train()
    for batch in dataloader:
        input_ids = batch[''input_ids''].to(device)
        attention_mask = batch[''attention_mask''].to(device)
        labels = batch[''labels''].to(device)
        
        optimizer.zero_grad()
        outputs = model(input_ids=input_ids, attention_mask=attention_mask, labels=labels)
        loss = outputs.loss
        loss.backward()
        optimizer.step()
        
        print(f''Epoch {epoch+1}, Loss: {loss.item():.4f}'')

# 6. 保存模型
model.save_pretrained(''./my_bert_model'')
tokenizer.save_pretrained(''./my_bert_model'')
\\`\\`\\`

---

## 实战练习

### 练习1：使用BERT进行文本分类

**任务**：
1. 使用BERT在IMDB电影评论数据集上进行微调
2. 实现文本分类

### 练习2：使用GPT-2进行文本生成

**任务**：
1. 使用GPT-2生成文本
2. 调整生成参数（如temperature、top_k、top_p）

---

## 本章小结

在本节中，我们学习了：
1. **BERT的原理**：基于Encoder，双向语言模型
2. **GPT的原理**：基于Decoder，单向语言模型
3. **Hugging Face Transformers库**：轻松使用预训练模型
4. **微调方法**：在下游任务上微调预训练模型

**关键要点**：
- BERT适合文本分类、问答等任务
- GPT适合文本生成任务
- Hugging Face Transformers库提供了便捷的接口

**下一章预告**：我们将学习大语言模型应用。

---

**恭喜你完成了第3章！** 🎉🎉🎉
        ');
INSERT INTO chapters(id,"courseId",title,description,"order") VALUES('l4-ch4','l4-nlp-transformer','第4章：大语言模型应用','学习大语言模型的实际应用，包括文本生成、问答系统、摘要生成等',4);
INSERT INTO sections(id,"chapterId",title,description,"order",duration,content) VALUES('l4-ch4-sec1','l4-ch4','4.1 文本生成（Text Generation）','学习使用大语言模型进行文本生成',1,1800,'
# 4.1 文本生成（Text Generation）

## 学习目标

通过本节学习，你将能够：
- 理解文本生成的原理
- 掌握不同的生成策略（Greedy Search、Beam Search、Sampling）
- 使用GPT-2/GPT-3进行文本生成
- 了解文本生成的应用场景

---

## 4.1.1 文本生成的任务

**任务**：
- 输入：一段文本（prompt）
- 输出：生成的文本

**挑战**：
- 如何生成连贯、有意义的文本？
- 如何控制生成文本的长度、风格等？

## 4.1.2 文本生成的策略

### 1. Greedy Search

**原理**：
- 每次选择概率最高的词

**问题**：
- 可能陷入重复循环
- 不是全局最优

### 2. Beam Search

**原理**：
- 维护top-k个候选序列

**代码示例**（使用Hugging Face Transformers）：

\\`\\`\\`python
from transformers import GPT2Tokenizer, GPT2LMHeadModel

# 加载模型和分词器
tokenizer = GPT2Tokenizer.from_pretrained(''gpt2'')
model = GPT2LMHeadModel.from_pretrained(''gpt2'')

# 编码输入
input_text = "Once upon a time"
input_ids = tokenizer.encode(input_text, return_tensors=''pt'')

# 生成文本（使用Beam Search）
output_ids = model.generate(
    input_ids,
    max_length=50,
    num_beams=5,
    early_stopping=True
)

# 解码输出
output_text = tokenizer.decode(output_ids[0], skip_special_tokens=True)
print(output_text)
\\`\\`\\`

### 3. Sampling

**原理**：
- 根据概率分布随机采样

**改进**：
- **Top-k Sampling**：只从概率最高的k个词中采样
- **Top-p (Nucleus) Sampling**：只从累积概率超过p的词中采样
- **Temperature**：控制采样的随机性

**代码示例**：

\\`\\`\\`python
# 生成文本（使用Top-p Sampling）
output_ids = model.generate(
    input_ids,
    max_length=50,
    do_sample=True,
    top_p=0.95,
    temperature=0.7
)

output_text = tokenizer.decode(output_ids[0], skip_special_tokens=True)
print(output_text)
\\`\\`\\`

## 4.1.3 使用GPT-2/GPT-3进行文本生成

**Hugging Face Transformers**（GPT-2）：

\\`\\`\\`python
from transformers import pipeline

# 使用pipeline进行文本生成
generator = pipeline(''text-generation'', model=''gpt2'')

# 生成文本
output = generator(
    "Once upon a time",
    max_length=50,
    num_return_sequences=3,
    do_sample=True,
    top_p=0.95,
    temperature=0.7
)

for i, seq in enumerate(output):
    print(f''{i+1}. {seq["generated_text"]}'')
\\`\\`\\`

**OpenAI API**（GPT-3）：

\\`\\`\\`python
import openai

openai.api_key = ''your-api-key''

response = openai.Completion.create(
    engine=''text-davinci-003'',
    prompt=''Once upon a time'',
    max_tokens=50,
    temperature=0.7,
    top_p=1.0,
    frequency_penalty=0.0,
    presence_penalty=0.0
)

print(response.choices[0].text.strip())
\\`\\`\\`

## 4.1.4 文本生成的应用场景

**应用**：
1. **故事生成**：生成故事、小说
2. **对话系统**：生成对话回复
3. **代码生成**：生成代码（如GitHub Copilot）
4. **诗歌生成**：生成诗歌

---

## 实战练习

### 练习1：使用GPT-2生成故事

**任务**：
1. 使用GPT-2生成一个短篇故事
2. 尝试不同的生成策略（Greedy Search、Beam Search、Sampling）

### 练习2：使用GPT-3 API进行文本生成

**任务**：
1. 申请OpenAI API密钥
2. 使用GPT-3 API进行文本生成
3. 调整生成参数，观察效果

---

## 本章小结

在本节中，我们学习了：
1. **文本生成的任务**：根据prompt生成文本
2. **生成策略**：Greedy Search、Beam Search、Sampling
3. **使用GPT-2/GPT-3**：Hugging Face Transformers和OpenAI API
4. **应用场景**：故事生成、对话系统、代码生成

**关键要点**：
- Beam Search可以生成更准确的文本
- Sampling可以生成更多样化的文本
- 调整生成参数可以控制生成文本的质量

**下一节预告**：我们将学习问答系统。

---

**恭喜你完成了第4章第1节！** 🎉
        ');
INSERT INTO sections(id,"chapterId",title,description,"order",duration,content) VALUES('l4-ch4-sec2','l4-ch4','4.2 问答系统（Question Answering）','学习使用大语言模型构建问答系统',2,1800,'
# 4.2 问答系统（Question Answering）

## 学习目标

通过本节学习，你将能够：
- 理解问答系统的任务
- 掌握Extractive QA和Generative QA
- 使用BERT构建问答系统
- 了解问答系统的应用场景

---

## 4.2.1 问答系统的任务

**任务**：
- 输入：问题 + 上下文（Context）
- 输出：答案

**类型**：
1. **Extractive QA**：答案直接从上下文中提取
2. **Generative QA**：答案由模型生成

## 4.2.2 使用BERT构建问答系统

**SQuAD数据集**：
- Stanford Question Answering Dataset
- 包含问题、上下文、答案

**使用Hugging Face Transformers**：

\\`\\`\\`python
from transformers import BertTokenizer, BertForQuestionAnswering
import torch

# 加载预训练的BERT问答模型和分词器
tokenizer = BertTokenizer.from_pretrained(''bert-large-uncased-whole-word-masking-finetuned-squad'')
model = BertForQuestionAnswering.from_pretrained(''bert-large-uncased-whole-word-masking-finetuned-squad'')

# 准备输入
question = "What is the capital of France?"
context = "France is a country in Europe. The capital of France is Paris."

# 编码输入
encoding = tokenizer.encode_plus(
    question,
    context,
    max_length=512,
    truncation=True,
    padding=''max_length'',
    return_tensors=''pt''
)

# 获取答案的起始和结束位置
input_ids = encoding[''input_ids'']
attention_mask = encoding[''attention_mask'']

with torch.no_grad():
    outputs = model(input_ids=input_ids, attention_mask=attention_mask)
    start_scores = outputs.start_logits
    end_scores = outputs.end_logits

# 找到最可能的起始和结束位置
start_index = torch.argmax(start_scores)
end_index = torch.argmax(end_scores)

# 解码答案
answer = tokenizer.convert_tokens_to_string(tokenizer.convert_ids_to_tokens(input_ids[0][start_index:end_index+1]))
print(answer)  # Paris
\\`\\`\\`

## 4.2.3 使用GPT-3构建问答系统

**OpenAI API**：

\\`\\`\\`python
import openai

openai.api_key = ''your-api-key''

response = openai.Completion.create(
    engine=''text-davinci-003'',
    prompt=''Context: France is a country in Europe. The capital of France is Paris.\\n\\nQuestion: What is the capital of France?\\n\\nAnswer:'',
    max_tokens=50,
    temperature=0.0
)

print(response.choices[0].text.strip())  # Paris
\\`\\`\\`

## 4.2.4 问答系统的应用场景

**应用**：
1. **客户支持**：自动回答客户问题
2. **智能助手**：Siri、Alexa、Google Assistant
3. **知识库问答**：企业内部知识库
4. **教育**：自动回答学生问题

---

## 实战练习

### 练习1：使用BERT构建问答系统

**任务**：
1. 在SQuAD数据集上微调BERT
2. 评估模型性能

### 练习2：使用GPT-3 API构建问答系统

**任务**：
1. 使用GPT-3 API构建问答系统
2. 对比BERT和GPT-3的性能

---

## 本章小结

在本节中，我们学习了：
1. **问答系统的任务**：输入问题+上下文，输出答案
2. **Extractive QA和Generative QA**
3. **使用BERT构建问答系统**：Hugging Face Transformers
4. **应用场景**：客户支持、智能助手等

**关键要点**：
- BERT适合Extractive QA
- GPT-3适合Generative QA
- 问答系统有很多实际应用

**下一节预告**：我们将学习文本摘要。

---

**恭喜你完成了第4章第2节！** 🎉
        ');
INSERT INTO sections(id,"chapterId",title,description,"order",duration,content) VALUES('l4-ch4-sec3','l4-ch4','4.3 文本摘要（Text Summarization）','学习使用大语言模型进行文本摘要',3,1800,'
# 4.3 文本摘要（Text Summarization）

## 学习目标

通过本节学习，你将能够：
- 理解文本摘要的任务
- 掌握Extractive Summarization和Abstractive Summarization
- 使用BART/T5进行文本摘要
- 了解文本摘要的应用场景

---

## 4.3.1 文本摘要的任务

**任务**：
- 输入：长文本
- 输出：摘要

**类型**：
1. **Extractive Summarization**：从原文中提取关键句子
2. **Abstractive Summarization**：生成新的句子（更接近人类摘要）

## 4.3.2 使用BART进行文本摘要

**BART**：
- 基于Transformer的Seq2Seq模型
- 适合Abstractive Summarization

**使用Hugging Face Transformers**：

\\`\\`\\`python
from transformers import BartTokenizer, BartForConditionalGeneration

# 加载预训练的BART模型和分词器
tokenizer = BartTokenizer.from_pretrained(''facebook/bart-large-cnn'')
model = BartForConditionalGeneration.from_pretrained(''facebook/bart-large-cnn'')

# 准备输入
text = """
The tower is 324 metres (1,063 ft) tall, about the same height as an 81-storey building, 
and the tallest structure in Paris. Its base is square, measuring 125 metres (410 ft) on each side. 
During its construction, the Eiffel Tower surpassed the Washington Monument to become the tallest 
man-made structure in the world, a title it held for 41 years until the Chrysler Building in 
New York City was finished in 1930. It was the first structure to reach a height of 300 metres.
"""

# 编码输入
encoding = tokenizer(text, return_tensors=''pt'', max_length=1024, truncation=True)

# 生成摘要
output_ids = model.generate(
    encoding[''input_ids''],
    max_length=150,
    min_length=50,
    do_sample=False
)

# 解码输出
summary = tokenizer.decode(output_ids[0], skip_special_tokens=True)
print(summary)
\\`\\`\\`

## 4.3.3 使用T5进行文本摘要

**T5**（Text-to-Text Transfer Transformer）：
- 将所有NLP任务统一为文本到文本的格式
- 适合多种任务，包括文本摘要

**使用Hugging Face Transformers**：

\\`\\`\\`python
from transformers import T5Tokenizer, T5ForConditionalGeneration

# 加载预训练的T5模型和分词器
tokenizer = T5Tokenizer.from_pretrained(''t5-small'')
model = T5ForConditionalGeneration.from_pretrained(''t5-small'')

# 准备输入
text = "summarize: " + """
The tower is 324 metres (1,063 ft) tall, about the same height as an 81-storey building, 
and the tallest structure in Paris. Its base is square, measuring 125 metres (410 ft) on each side.
"""

# 编码输入
encoding = tokenizer(text, return_tensors=''pt'', max_length=512, truncation=True)

# 生成摘要
output_ids = model.generate(
    encoding[''input_ids''],
    max_length=150,
    min_length=50,
    do_sample=False
)

# 解码输出
summary = tokenizer.decode(output_ids[0], skip_special_tokens=True)
print(summary)
\\`\\`\\`

## 4.3.4 文本摘要的应用场景

**应用**：
1. **新闻摘要**：自动生成新闻摘要
2. **论文摘要**：自动生成论文摘要
3. **会议记录摘要**：自动生成会议纪要
4. **邮件摘要**：自动生成邮件摘要

---

## 实战练习

### 练习1：使用BART进行文本摘要

**任务**：
1. 使用BART对长文本进行摘要
2. 调整生成参数，观察效果

### 练习2：使用T5进行文本摘要

**任务**：
1. 使用T5对长文本进行摘要
2. 对比BART和T5的性能

---

## 本章小结

在本节中，我们学习了：
1. **文本摘要的任务**：输入长文本，输出摘要
2. **Extractive和Abstractive Summarization**
3. **使用BART/T5进行文本摘要**：Hugging Face Transformers
4. **应用场景**：新闻摘要、论文摘要等

**关键要点**：
- BART适合Abstractive Summarization
- T5适合多种NLP任务
- 文本摘要有很多实际应用

**课程总结预告**：我们将进行课程总结和大作业。

---

**恭喜你完成了第4章！** 🎉🎉🎉
        ');

-- ====== L5: 大模型与AI系统 ======
INSERT INTO courses(id,title,level,description,thumbnail,"totalDuration",tags) VALUES(
  'l5-llm-ai-systems','大模型与AI系统',5,'深入学习大语言模型原理、训练技术、部署优化，以及AI系统设计。适合有NLP和深度学习基础、想从事AI系统研发的开发者。','https://example.com/thumbnails/l5-llm-ai-systems.jpg',21600,ARRAY['大模型','LLM','AI系统','分布式训练','模型部署','RAG','Agent']::text[]);

INSERT INTO chapters(id,"courseId",title,description,"order") VALUES('l5-ch1','l5-llm-ai-systems','第1章：大模型原理','理解大语言模型的基本原理，掌握GPT、LLaMA等模型的架构',1);
INSERT INTO sections(id,"chapterId",title,description,"order",duration,content) VALUES('l5-ch1-sec1','l5-ch1','1.1 大语言模型架构','理解GPT、LLaMA等大语言模型的架构',1,1800,'
# 1.1 大语言模型架构

## 学习目标

通过本节学习，你将能够：
- 理解大语言模型的基本原理
- 掌握GPT、LLaMA等模型的架构
- 了解大模型的技术特点
- 理解缩放定律（Scaling Laws）

---

## 1.1.1 什么是大语言模型？

**定义**：
- 参数规模达到亿级、十亿级甚至千亿级的语言模型
- 在大规模语料上训练
- 具有涌现能力（Emergent Abilities）

**代表性模型**：
- **GPT系列**（OpenAI）：GPT-3、GPT-3.5、GPT-4
- **LLaMA系列**（Meta）：LLaMA、LLaMA 2、LLaMA 3
- **PaLM系列**（Google）：PaLM、PaLM 2
- **国内模型**：百川、智谱、文心一言、通义千问

## 1.1.2 GPT架构详解

**架构**：
- 基于Transformer Decoder
- 单向语言模型（从左到右）
- 预训练任务：Causal Language Modeling (CLM)

**结构**：
1. **输入嵌入层**（Input Embedding）
2. **位置编码**（Position Encoding）
3. **多层Transformer Decoder层**：
   - Masked Multi-Head Attention
   - Feed Forward Network
   - Residual Connection + Layer Normalization
4. **输出层**（Output Linear + Softmax）

**缩放定律（Scaling Laws）**：
- 模型性能随参数规模、数据规模、计算量的增加而提升
- 遵循幂律关系

## 1.1.3 LLaMA架构详解

**架构**：
- 基于Transformer Decoder
- 类似GPT，但有一些改进

**改进点**：
1. **使用RMSNorm**：代替LayerNorm
2. **使用SwiGLU激活函数**：代替ReLU
3. **使用Rotary Position Embedding (RoPE)**：代替绝对位置编码
4. **使用Grouped-Query Attention (GQA)**：提升推理效率（LLaMA 3）

**PyTorch实现**（简化版）：

\\`\\`\\`python
import torch
import torch.nn as nn
import torch.nn.functional as F

class LLaMABlock(nn.Module):
    def __init__(self, d_model, num_heads, d_ff):
        super(LLaMABlock, self).__init__()
        self.norm1 = nn.RMSNorm(d_model)
        self.attn = nn.MultiheadAttention(d_model, num_heads)
        self.norm2 = nn.RMSNorm(d_model)
        self.ffn = nn.Sequential(
            nn.Linear(d_model, d_ff),
            nn.SwiGLU(),  # SwiGLU激活函数
            nn.Linear(d_ff, d_model)
        )
    
    def forward(self, x):
        # Multi-Head Attention
        x = x + self.attn(self.norm1(x))
        # Feed Forward Network
        x = x + self.ffn(self.norm2(x))
        return x

class LLaMA(nn.Module):
    def __init__(self, vocab_size, d_model, num_layers, num_heads, d_ff):
        super(LLaMA, self).__init__()
        self.embedding = nn.Embedding(vocab_size, d_model)
        self.layers = nn.ModuleList([
            LLaMABlock(d_model, num_heads, d_ff)
            for _ in range(num_layers)
        ])
        self.norm = nn.RMSNorm(d_model)
        self.lm_head = nn.Linear(d_model, vocab_size)
    
    def forward(self, x):
        x = self.embedding(x)
        for layer in self.layers:
            x = layer(x)
        x = self.norm(x)
        x = self.lm_head(x)
        return x

# 使用示例
model = LLaMA(vocab_size=32000, d_model=4096, num_layers=32, num_heads=32, d_ff=11008)
x = torch.randint(0, 32000, (1, 100))  # (batch_size, sequence_length)
output = model(x)
print(output.shape)  # torch.Size([1, 100, 32000])
\\`\\`\\`

## 1.1.4 大语言模型的技术特点

**特点**：
1. **大规模预训练**：在TB级文本数据上训练
2. **Few-shot Learning**：通过提示（Prompt）完成新任务
3. **涌现能力**：模型规模达到一定程度后出现新能力
4. **指令跟随**：通过指令微调（Instruction Tuning）提升模型跟随指令的能力
5. **人类对齐**：通过RLHF（Reinforcement Learning from Human Feedback）使模型输出更符合人类偏好

---

## 实战练习

### 练习1：分析GPT和LLaMA的架构差异

**任务**：
1. 对比GPT和LLaMA的架构
2. 分析LLaMA的改进点

### 练习2：实现简化的LLaMA Block

**任务**：
1. 从零实现LLaMA Block
2. 测试其效果

---

## 本章小结

在本节中，我们学习了：
1. **大语言模型的定义**：参数规模大、训练数据多
2. **GPT架构**：基于Transformer Decoder
3. **LLaMA架构**：GPT的改进版
4. **技术特点**：大规模预训练、Few-shot Learning、涌现能力

**关键要点**：
- 大语言模型具有强大的生成能力
- LLaMA通过多项改进提升了性能
- 缩放定律指导大模型的训练

**下一节预告**：我们将学习大模型的训练技术。

---

**恭喜你完成了第1章第1节！** 🎉
        ');
INSERT INTO sections(id,"chapterId",title,description,"order",duration,content) VALUES('l5-ch1-sec2','l5-ch1','1.2 大模型的训练技术','掌握大模型的训练技术，包括分布式训练、混合精度训练等',2,1800,'
# 1.2 大模型的训练技术

## 学习目标

通过本节学习，你将能够：
- 理解分布式训练的必要性
- 掌握数据并行、模型并行、流水线并行
- 了解混合精度训练
- 了解ZeRO优化器

---

## 1.2.1 为什么需要分布式训练？

**问题**：
- 大模型参数规模大（数十亿甚至数千亿）
- 单张GPU显存无法容纳
- 单张GPU计算速度慢

**解决方案**：分布式训练
- 将模型或数据分布到多张GPU上
- 并行训练

## 1.2.2 分布式训练的策略

### 1. 数据并行（Data Parallelism）

**原理**：
- 每个GPU有完整的模型副本
- 将数据分批发送到不同GPU
- 每个GPU独立计算梯度
- 梯度聚合后更新模型

**优势**：
- 实现简单
- 适合模型不大、数据多的情况

**劣势**：
- 每个GPU需要存储完整模型
- 显存受限

**PyTorch实现**：

\\`\\`\\`python
import torch
import torch.nn as nn
import torch.optim as optim
import torch.distributed as dist
from torch.nn.parallel import DistributedDataParallel as DDP

# 初始化进程组
dist.init_process_group(backend=''nccl'')

# 定义模型
model = nn.TransformerDecoder(...)
model = model.to(local_rank)
model = DDP(model, device_ids=[local_rank])

# 定义优化器
optimizer = optim.Adam(model.parameters(), lr=0.001)

# 训练循环
for epoch in range(100):
    for batch in dataloader:
        inputs, labels = batch
        inputs, labels = inputs.to(local_rank), labels.to(local_rank)
        
        optimizer.zero_grad()
        outputs = model(inputs)
        loss = criterion(outputs, labels)
        loss.backward()
        optimizer.step()
\\`\\`\\`

### 2. 模型并行（Model Parallelism）

**原理**：
- 将模型的不同层放到不同GPU上
- 数据在不同GPU之间流动

**优势**：
- 适合模型大、单张GPU显存无法容纳的情况

**劣势**：
- 实现复杂
- GPU利用率可能不高

**PyTorch实现**：

\\`\\`\\`python
import torch
import torch.nn as nn

class ModelParallelTransformer(nn.Module):
    def __init__(self):
        super(ModelParallelTransformer, self).__init__()
        # 前几层放在GPU 0
        self.layer1 = nn.TransformerDecoderLayer(...).to(''cuda:0'')
        self.layer2 = nn.TransformerDecoderLayer(...).to(''cuda:0'')
        
        # 后几层放在GPU 1
        self.layer3 = nn.TransformerDecoderLayer(...).to(''cuda:1'')
        self.layer4 = nn.TransformerDecoderLayer(...).to(''cuda:1'')
    
    def forward(self, x):
        # x在GPU 0
        x = self.layer1(x)
        x = self.layer2(x)
        
        # 将x移到GPU 1
        x = x.to(''cuda:1'')
        
        x = self.layer3(x)
        x = self.layer4(x)
        return x
\\`\\`\\`

### 3. 流水线并行（Pipeline Parallelism）

**原理**：
- 将模型分成多个阶段
- 不同批次的数据在不同阶段上并行处理

**优势**：
- 提升GPU利用率
- 减少空闲时间

**PyTorch实现**（使用torchgpipe）：

\\`\\`\\`python
from torchgpipe import GPipe

# 定义模型
model = nn.Sequential(
    nn.TransformerDecoderLayer(...),
    nn.TransformerDecoderLayer(...),
    nn.TransformerDecoderLayer(...),
    nn.TransformerDecoderLayer(...),
)

# 使用GPipe进行流水线并行
model = GPipe(model, balance=[2, 2], devices=[0, 1], chunks=8)
\\`\\`\\`

## 1.2.3 混合精度训练（Mixed Precision Training）

**原理**：
- 使用FP16（半精度）进行计算
- 使用FP32（单精度）存储权重和梯度

**优势**：
- 减少显存占用
- 提升训练速度

**PyTorch实现**（使用torch.cuda.amp）：

\\`\\`\\`python
import torch
from torch.cuda.amp import autocast, GradScaler

# 定义模型、优化器
model = ...
optimizer = torch.optim.Adam(model.parameters(), lr=0.001)

# 创建GradScaler
scaler = GradScaler()

# 训练循环
for epoch in range(100):
    for batch in dataloader:
        inputs, labels = batch
        inputs, labels = inputs.to(''cuda''), labels.to(''cuda'')
        
        optimizer.zero_grad()
        
        # 使用autocast进行混合精度训练
        with autocast():
            outputs = model(inputs)
            loss = criterion(outputs, labels)
        
        # 使用GradScaler进行梯度缩放
        scaler.scale(loss).backward()
        scaler.step(optimizer)
        scaler.update()
\\`\\`\\`

## 1.2.4 ZeRO优化器（Zero Redundancy Optimizer）

**原理**：
- 将优化器状态、梯度、参数分片存储在不同GPU上
- 减少显存占用

**ZeRO的三个阶段**：
1. **ZeRO-1**：分片优化器状态
2. **ZeRO-2**：分片优化器状态 + 梯度
3. **ZeRO-3**：分片优化器状态 + 梯度 + 参数

**使用DeepSpeed**：

\\`\\`\\`python
import deepspeed

# 定义模型、优化器
model = ...
optimizer = torch.optim.Adam(model.parameters(), lr=0.001)

# 初始化DeepSpeed
model_engine, optimizer, _, _ = deepspeed.initialize(
    model=model,
    optimizer=optimizer,
    config=''ds_config.json''
)

# 训练循环
for epoch in range(100):
    for batch in dataloader:
        inputs, labels = batch
        inputs, labels = inputs.to(''cuda''), labels.to(''cuda'')
        
        outputs = model_engine(inputs)
        loss = criterion(outputs, labels)
        model_engine.backward(loss)
        model_engine.step()
\\`\\`\\`

**ds_config.json**：

\\`\\`\\`json
{
  "train_batch_size": 32,
  "gradient_accumulation_steps": 1,
  "optimizer": {
    "type": "Adam",
    "params": {
      "lr": 0.001
    }
  },
  "fp16": {
    "enabled": true
  },
  "zero_optimization": {
    "stage": 3
  }
}
\\`\\`\\`

---

## 实战练习

### 练习1：实现数据并行

**任务**：
1. 使用PyTorch的DDP实现数据并行
2. 在多张GPU上训练模型

### 练习2：使用DeepSpeed进行ZeRO训练

**任务**：
1. 安装DeepSpeed
2. 使用DeepSpeed进行ZeRO训练
3. 对比不同ZeRO阶段的显存占用和训练速度

---

## 本章小结

在本节中，我们学习了：
1. **分布式训练的必要性**：大模型需要分布式训练
2. **分布式训练的策略**：数据并行、模型并行、流水线并行
3. **混合精度训练**：使用FP16进行计算
4. **ZeRO优化器**：减少显存占用

**关键要点**：
- 数据并行适合模型不大、数据多的情况
- 模型并行适合模型大、单张GPU显存无法容纳的情况
- 混合精度训练可以减少显存占用、提升训练速度
- ZeRO可以进一步减少显存占用

**下一章预告**：我们将学习大模型部署与优化。

---

**恭喜你完成了第1章第2节！** 🎉
        ');
INSERT INTO chapters(id,"courseId",title,description,"order") VALUES('l5-ch2','l5-llm-ai-systems','第2章：大模型部署与优化','掌握大模型部署技术，包括推理优化、量化、模型压缩等',2);
INSERT INTO sections(id,"chapterId",title,description,"order",duration,content) VALUES('l5-ch2-sec1','l5-ch2','2.1 推理优化（Inference Optimization）','掌握大模型推理优化技术，包括KV Cache、Flash Attention等',1,1800,'
# 2.1 推理优化（Inference Optimization）

## 学习目标

通过本节学习，你将能够：
- 理解大模型推理的挑战
- 掌握KV Cache、Flash Attention等优化技术
- 使用vLLM、TensorRT-LLM等推理框架
- 了解推理优化的应用场景

---

## 2.1.1 大模型推理的挑战

**挑战**：
1. **显存占用大**：模型参数多，KV Cache占用大
2. **计算量大**：每次生成需要计算所有参数
3. **延迟高**：自回归生成导致延迟累积

## 2.1.2 KV Cache

**原理**：
- 缓存Attention中的Key和Value
- 避免重复计算

**优势**：
- 减少计算量
- 降低延迟

**问题**：
- 显存占用大（长序列、大batch size）

**优化**：
- **PagedAttention**（vLLM）：将KV Cache分页存储
- **Grouped-Query Attention (GQA)**：多个Query头共享一组Key/Value头

## 2.1.3 Flash Attention

**原理**：
- 重新组织Attention计算
- 减少HBM（High Bandwidth Memory）访问次数
- 提升计算效率

**优势**：
- 更快的推理速度
- 更低的显存占用

**使用Flash Attention**：

\\`\\`\\`python
import torch
from flash_attn import flash_attn_func

# 准备输入
Q = torch.randn(1, 128, 32, 64).cuda()  # (batch, seqlen, num_heads, head_dim)
K = torch.randn(1, 128, 32, 64).cuda()
V = torch.randn(1, 128, 32, 64).cuda()

# 使用Flash Attention
output = flash_attn_func(Q, K, V)
print(output.shape)  # torch.Size([1, 128, 32, 64])
\\`\\`\\`

## 2.1.4 推理框架

### 1. vLLM

**特点**：
- 使用PagedAttention
- 高吞吐量
- 适合在线服务

**使用示例**：

\\`\\`\\`python
from vllm import LLM, SamplingParams

# 加载模型
llm = LLM(model="meta-llama/Llama-2-7b-hf")

# 设置生成参数
sampling_params = SamplingParams(temperature=0.7, top_p=0.95, max_tokens=100)

# 生成文本
prompts = ["Hello, my name is", "The capital of France is"]
outputs = llm.generate(prompts, sampling_params)

# 输出结果
for output in outputs:
    generated_text = output.outputs[0].text
    print(generated_text)
\\`\\`\\`

### 2. TensorRT-LLM

**特点**：
- NVIDIA推出的LLM推理加速库
- 支持量化、Kernel融合等优化
- 适合NVIDIA GPU

**使用示例**：

\\`\\`\\`bash
# 转换模型为TensorRT格式
python convert_checkpoint.py --model_dir meta-llama/Llama-2-7b-hf --output_dir llama-2-7b-trt

# 运行推理
python run.py --engine_dir llama-2-7b-trt --prompt "Hello, my name is" --max_output_len 100
\\`\\`\\`

## 2.1.5 推理优化的应用场景

**应用**：
1. **在线服务**：高并发、低延迟
2. **边缘设备**：模型压缩、量化
3. **批量处理**：离线任务、高吞吐量

---

## 实战练习

### 练习1：使用vLLM进行推理

**任务**：
1. 安装vLLM
2. 使用vLLM加载LLaMA-2-7B
3. 对比使用KV Cache和不使用KV Cache的推理速度

### 练习2：使用Flash Attention

**任务**：
1. 安装Flash Attention
2. 使用Flash Attention进行推理
3. 对比使用Flash Attention和不使用的推理速度

---

## 本章小结

在本节中，我们学习了：
1. **大模型推理的挑战**：显存占用大、计算量大、延迟高
2. **KV Cache**：缓存Key和Value，减少计算量
3. **Flash Attention**：重新组织Attention计算，提升效率
4. **推理框架**：vLLM、TensorRT-LLM

**关键要点**：
- KV Cache可以减少计算量，但显存占用大
- Flash Attention可以提升推理速度
- 使用推理框架可以简化部署

**下一节预告**：我们将学习模型量化。

---

**恭喜你完成了第2章第1节！** 🎉
        ');
INSERT INTO sections(id,"chapterId",title,description,"order",duration,content) VALUES('l5-ch2-sec2','l5-ch2','2.2 模型量化（Model Quantization）','掌握模型量化技术，包括INT8、INT4、GPTQ、AWQ等',2,1800,'
# 2.2 模型量化（Model Quantization）

## 学习目标

通过本节学习，你将能够：
- 理解模型量化的原理
- 掌握INT8、INT4、GPTQ、AWQ等量化方法
- 使用bitsandbytes、GPTQ、AWQ等工具
- 了解模型量化的应用场景

---

## 2.2.1 为什么需要模型量化？

**问题**：
- 大模型参数规模大（FP16/BF16）
- 显存占用大
- 推理速度慢

**解决方案**：模型量化（Quantization）
- 将模型参数从高精度（FP16）转换为低精度（INT8/INT4）
- 减少显存占用
- 提升推理速度

## 2.2.2 常用的量化方法

### 1. INT8量化

**原理**：
- 将FP16参数转换为INT8
- 使用对称量化或非对称量化

**优势**：
- 减少显存占用（2倍）
- 提升推理速度

**使用bitsandbytes**：

\\`\\`\\`python
import torch
from transformers import AutoModelForCausalLM, AutoTokenizer

# 加载INT8量化的模型
model = AutoModelForCausalLM.from_pretrained(
    "meta-llama/Llama-2-7b-hf",
    load_in_8bit=True,
    device_map="auto"
)

tokenizer = AutoTokenizer.from_pretrained("meta-llama/Llama-2-7b-hf")

# 生成文本
prompt = "Hello, my name is"
inputs = tokenizer(prompt, return_tensors="pt").to("cuda")
outputs = model.generate(**inputs, max_new_tokens=100)
print(tokenizer.decode(outputs[0], skip_special_tokens=True))
\\`\\`\\`

### 2. INT4量化（GPTQ）

**原理**：
- 使用最优脑量化（Optimal Brain Quantization）
- 最小化量化误差

**优势**：
- 减少显存占用（4倍）
- 保持较高的精度

**使用GPTQ**：

\\`\\`\\`python
from transformers import AutoModelForCausalLM, AutoTokenizer

# 加载INT4量化的模型（使用GPTQ）
model = AutoModelForCausalLM.from_pretrained(
    "meta-llama/Llama-2-7b-hf",
    load_in_4bit=True,
    bnb_4bit_use_double_quant=True,
    bnb_4bit_quant_type="nf4",
    bnb_4bit_compute_dtype=torch.bfloat16
)

tokenizer = AutoTokenizer.from_pretrained("meta-llama/Llama-2-7b-hf")

# 生成文本
prompt = "Hello, my name is"
inputs = tokenizer(prompt, return_tensors="pt").to("cuda")
outputs = model.generate(**inputs, max_new_tokens=100)
print(tokenizer.decode(outputs[0], skip_special_tokens=True))
\\`\\`\\`

### 3. AWQ（Activation-aware Weight Quantization）

**原理**：
- 保护显著的权重（Salient Weights）
- 提升量化精度

**优势**：
- 比GPTQ更快
- 精度接近FP16

**使用AWQ**：

\\`\\`\\`python
from awq import AutoAWQForCausalLM
from transformers import AutoTokenizer

# 加载模型
model = AutoAWQForCausalLM.from_pretrained("meta-llama/Llama-2-7b-hf")
tokenizer = AutoTokenizer.from_pretrained("meta-llama/Llama-2-7b-hf")

# 量化模型
model.quantize(tokenizer, quant_config={"zero_point": True, "q_group_size": 128, "w_bit": 4, "version": "GEMM"})

# 保存量化后的模型
model.save_quantized("llama-2-7b-awq")

# 加载量化后的模型
model = AutoAWQForCausalLM.from_quantized("llama-2-7b-awq")
\\`\\`\\`

## 2.2.3 量化方法的对比

| 方法 | 精度 | 显存占用 | 推理速度 | 实现难度 |
|------|------|----------|----------|----------|
| FP16 | 高 | 高 | 慢 | 低 |
| INT8 | 中 | 中 | 中 | 中 |
| GPTQ (INT4) | 中高 | 低 | 快 | 高 |
| AWQ (INT4) | 中高 | 低 | 快 | 中 |

## 2.2.4 模型量化的应用场景

**应用**：
1. **边缘设备**：显存受限
2. **在线服务**：需要高吞吐量
3. **批量处理**：需要快速处理大量数据

---

## 实战练习

### 练习1：使用INT8量化

**任务**：
1. 使用bitsandbytes加载INT8量化的模型
2. 对比量化前后的显存占用和推理速度

### 练习2：使用GPTQ进行INT4量化

**任务**：
1. 使用GPTQ对模型进行INT4量化
2. 对比GPTQ和INT8量化的性能

---

## 本章小结

在本节中，我们学习了：
1. **模型量化的原理**：将高精度参数转换为低精度
2. **常用方法**：INT8、GPTQ、AWQ
3. **工具**：bitsandbytes、GPTQ、AWQ
4. **应用场景**：边缘设备、在线服务、批量处理

**关键要点**：
- 模型量化可以减少显存占用、提升推理速度
- INT8量化实现简单，但精度损失较大
- GPTQ和AWQ可以保持较高的精度

**下一节预告**：我们将学习模型压缩与蒸馏。

---

**恭喜你完成了第2章第2节！** 🎉
        ');
INSERT INTO sections(id,"chapterId",title,description,"order",duration,content) VALUES('l5-ch2-sec3','l5-ch2','2.3 模型压缩与蒸馏','掌握模型压缩与蒸馏技术，包括知识蒸馏、剪枝、低秩分解等',3,1800,'
# 2.3 模型压缩与蒸馏

## 学习目标

通过本节学习，你将能够：
- 理解模型压缩与蒸馏的原理
- 掌握知识蒸馏、剪枝、低秩分解等技术
- 使用Hugging Face Transformers进行模型蒸馏
- 了解模型压缩的应用场景

---

## 2.3.1 为什么需要模型压缩？

**问题**：
- 大模型参数规模大
- 推理速度慢
- 难以部署到边缘设备

**解决方案**：模型压缩（Model Compression）
- 减少模型参数
- 提升推理速度
- 保持较高精度

## 2.3.2 常用的模型压缩技术

### 1. 知识蒸馏（Knowledge Distillation）

**原理**：
- 使用大模型（教师模型）指导小模型（学生模型）训练
- 学生模型学习教师模型的输出分布

**损失函数**：
- **Hard Label Loss**：学生模型的输出与真实标签的交叉熵
- **Soft Label Loss**：学生模型的输出与教师模型的输出的KL散度

**PyTorch实现**：

\\`\\`\\`python
import torch
import torch.nn as nn
import torch.nn.functional as F

# 定义蒸馏损失
def distillation_loss(student_logits, teacher_logits, labels, temperature=3.0, alpha=0.5):
    # Hard Label Loss
    hard_loss = F.cross_entropy(student_logits, labels)
    
    # Soft Label Loss
    soft_loss = F.kl_div(
        F.log_softmax(student_logits / temperature, dim=1),
        F.softmax(teacher_logits / temperature, dim=1),
        reduction=''batchmean''
    ) * (temperature ** 2)
    
    return alpha * hard_loss + (1 - alpha) * soft_loss

# 训练循环
teacher_model = ...  # 加载教师模型
student_model = ...  # 定义学生模型

optimizer = torch.optim.Adam(student_model.parameters(), lr=0.001)

for epoch in range(100):
    for batch in dataloader:
        inputs, labels = batch
        inputs, labels = inputs.to(''cuda''), labels.to(''cuda'')
        
        # 教师模型推理（不计算梯度）
        with torch.no_grad():
            teacher_logits = teacher_model(inputs)
        
        # 学生模型推理
        student_logits = student_model(inputs)
        
        # 计算蒸馏损失
        loss = distillation_loss(student_logits, teacher_logits, labels)
        
        optimizer.zero_grad()
        loss.backward()
        optimizer.step()
\\`\\`\\`

### 2. 剪枝（Pruning）

**原理**：
- 移除不重要的参数（权重）
- 减少模型参数

**类型**：
- **非结构化剪枝**：移除个别权重
- **结构化剪枝**：移除整个神经元、通道或层

**使用PyTorch**：

\\`\\`\\`python
import torch
import torch.nn as nn
import torch.nn.utils.prune as prune

# 定义模型
model = nn.Sequential(
    nn.Linear(784, 256),
    nn.ReLU(),
    nn.Linear(256, 10)
)

# 非结构化剪枝（移除20%的权重）
prune.l1_unstructured(model[0], name=''weight'', amount=0.2)

# 结构化剪枝（移除20%的输出通道）
prune.ln_structured(model[0], name=''weight'', amount=0.2, n=2, dim=0)

# 永久移除剪枝的权重
prune.remove(model[0], ''weight'')
\\`\\`\\`

### 3. 低秩分解（Low-Rank Factorization）

**原理**：
- 将大矩阵分解为多个小矩阵
- 减少参数数量

**示例**：
- 将一个 $m \\times n$ 的矩阵分解为 $m \\times r$ 和 $r \\times n$ 两个矩阵（$r \\ll m, n$）

**PyTorch实现**：

\\`\\`\\`python
import torch
import torch.nn as nn

# 原始全连接层
original_layer = nn.Linear(1024, 512)

# 低秩分解
r = 64  # 秩
low_rank_layer = nn.Sequential(
    nn.Linear(1024, r),
    nn.Linear(r, 512)
)

# 初始化低秩层的权重（使用SVD）
U, S, V = torch.svd(original_layer.weight)
low_rank_layer[0].weight.data = U[:, :r] @ torch.diag(S[:r])
low_rank_layer[1].weight.data = V[:, :r].T
\\`\\`\\`

## 2.3.3 使用Hugging Face Transformers进行模型蒸馏

**DistilBERT**：
- BERT的蒸馏版本
- 参数减少40%，速度提升60%，精度损失很小

**使用示例**：

\\`\\`\\`python
from transformers import DistilBertTokenizer, DistilBertModel

# 加载DistilBERT
tokenizer = DistilBertTokenizer.from_pretrained(''distilbert-base-uncased'')
model = DistilBertModel.from_pretrained(''distilbert-base-uncased'')

# 编码文本
text = "Hello, world!"
encoding = tokenizer(text, return_tensors=''pt'')

# 获取输出
output = model(**encoding)
last_hidden_states = output.last_hidden_state
print(last_hidden_states.shape)  # torch.Size([1, 4, 768])
\\`\\`\\`

## 2.3.4 模型压缩的应用场景

**应用**：
1. **边缘设备**：手机、IoT设备
2. **实时应用**：自动驾驶、语音助手
3. **批量处理**：离线任务、高吞吐量

---

## 实战练习

### 练习1：实现知识蒸馏

**任务**：
1. 使用教师模型（如BERT）指导学生模型（如DistilBERT）训练
2. 对比蒸馏前后的模型性能

### 练习2：实现模型剪枝

**任务**：
1. 对训练好的模型进行剪枝
2. 对比剪枝前后的模型大小和精度

---

## 本章小结

在本节中，我们学习了：
1. **模型压缩的原理**：减少参数、提升速度
2. **常用技术**：知识蒸馏、剪枝、低秩分解
3. **Hugging Face Transformers**：使用DistilBERT
4. **应用场景**：边缘设备、实时应用

**关键要点**：
- 知识蒸馏可以保持较高精度
- 剪枝可以减少参数
- 低秩分解可以降低计算量

**下一章预告**：我们将学习AI系统设计与实践。

---

**恭喜你完成了第2章！** 🎉🎉🎉
        ');
INSERT INTO chapters(id,"courseId",title,description,"order") VALUES('l5-ch3','l5-llm-ai-systems','第3章：AI系统设计与实践','学习AI系统的设计，包括RAG、Agent、多模态等',3);
INSERT INTO sections(id,"chapterId",title,description,"order",duration,content) VALUES('l5-ch3-sec1','l5-ch3','3.1 检索增强生成（RAG）','理解RAG的原理，掌握RAG系统的设计与实现',1,1800,'
# 3.1 检索增强生成（RAG）

## 学习目标

通过本节学习，你将能够：
- 理解RAG的原理
- 掌握RAG系统的设计
- 使用LangChain、LlamaIndex实现RAG
- 了解RAG的应用场景

---

## 3.1.1 为什么需要RAG？

**问题**：
- 大语言模型的知识有限（训练数据截止日期）
- 无法访问私有数据
- 容易产生幻觉（Hallucination）

**解决方案**：检索增强生成（Retrieval-Augmented Generation, RAG）
- 从外部知识库检索相关信息
- 将检索到的信息提供给LLM
- 生成更准确、更及时的回答

## 3.1.2 RAG系统的架构

**流程**：
1. **索引（Indexing）**：
   - 加载文档
   - 分割文档（Chunking）
   - 将文档转换为向量（Embedding）
   - 存储到向量数据库

2. **检索（Retrieval）**：
   - 将用户查询转换为向量
   - 在向量数据库中检索相似文档

3. **生成（Generation）**：
   - 将检索到的文档与用户查询组合成Prompt
   - 输入LLM生成回答

## 3.1.3 使用LangChain实现RAG

**安装LangChain**：

\\`\\`\\`bash
pip install langchain langchain-community langchain-huggingface faiss-cpu
\\`\\`\\`

**代码示例**：

\\`\\`\\`python
from langchain.document_loaders import TextLoader
from langchain.text_splitter import CharacterTextSplitter
from langchain.embeddings import HuggingFaceEmbeddings
from langchain.vectorstores import FAISS
from langchain.chains import RetrievalQA
from langchain.llms import HuggingFacePipeline

# 1. 加载文档
loader = TextLoader(''knowledge_base.txt'')
documents = loader.load()

# 2. 分割文档
text_splitter = CharacterTextSplitter(chunk_size=500, chunk_overlap=50)
texts = text_splitter.split_documents(documents)

# 3. 创建向量数据库
embeddings = HuggingFaceEmbeddings(model_name=''sentence-transformers/all-MiniLM-L6-v2'')
vectorstore = FAISS.from_documents(texts, embeddings)

# 4. 创建检索器
retriever = vectorstore.as_retriever(search_kwargs={''k'': 3})

# 5. 加载LLM
llm = HuggingFacePipeline.from_model_id(
    model_id=''meta-llama/Llama-2-7b-chat-hf'',
    task=''text-generation'',
    pipeline_kwargs={''max_new_tokens'': 100}
)

# 6. 创建RAG链
qa_chain = RetrievalQA.from_chain_type(
    llm=llm,
    retriever=retriever,
    return_source_documents=True
)

# 7. 使用RAG系统
query = "What is the capital of France?"
result = qa_chain({''query'': query})
print(result[''result''])
print(result[''source_documents''])
\\`\\`\\`

## 3.1.4 使用LlamaIndex实现RAG

**安装LlamaIndex**：

\\`\\`\\`bash
pip install llama-index
\\`\\`\\`

**代码示例**：

\\`\\`\\`python
from llama_index import VectorStoreIndex, SimpleDirectoryReader
from llama_index.llms import HuggingFaceLLM
from llama_index.prompts import PromptTemplate

# 1. 加载文档
documents = SimpleDirectoryReader(''knowledge_base/'').load_data()

# 2. 创建索引
index = VectorStoreIndex.from_documents(documents)

# 3. 配置LLM
llm = HuggingFaceLLM(
    model_name=''meta-llama/Llama-2-7b-chat-hf'',
    tokenizer_name=''meta-llama/Llama-2-7b-chat-hf'',
    max_new_tokens=100
)
index.set_llm(llm)

# 4. 创建查询引擎
query_engine = index.as_query_engine(similarity_top_k=3)

# 5. 使用RAG系统
query = "What is the capital of France?"
response = query_engine.query(query)
print(response)
\\`\\`\\`

## 3.1.5 RAG的应用场景

**应用**：
1. **企业知识库**：回答员工问题
2. **客户支持**：自动回答客户问题
3. **研究助手**：帮助研究人员查找文献
4. **个人助理**：管理个人信息

---

## 实战练习

### 练习1：使用LangChain构建RAG系统

**任务**：
1. 准备一个知识库（如：公司文档、产品手册）
2. 使用LangChain构建RAG系统
3. 测试RAG系统的准确性

### 练习2：使用LlamaIndex构建RAG系统

**任务**：
1. 使用LlamaIndex构建RAG系统
2. 对比LangChain和LlamaIndex的易用性

---

## 本章小结

在本节中，我们学习了：
1. **RAG的原理**：检索 + 生成
2. **RAG系统的架构**：索引、检索、生成
3. **使用LangChain/LlamaIndex实现RAG**
4. **应用场景**：企业知识库、客户支持等

**关键要点**：
- RAG可以缓解幻觉问题
- RAG可以访问私有数据
- LangChain和LlamaIndex简化了RAG的实现

**下一节预告**：我们将学习Agent系统。

---

**恭喜你完成了第3章第1节！** 🎉
        ');
INSERT INTO sections(id,"chapterId",title,description,"order",duration,content) VALUES('l5-ch3-sec2','l5-ch3','3.2 Agent系统','理解Agent的原理，掌握Agent系统的设计与实现',2,1800,'
# 3.2 Agent系统

## 学习目标

通过本节学习，你将能够：
- 理解Agent的原理
- 掌握ReAct、Plan-and-Execute等Agent框架
- 使用LangChain、AutoGPT实现Agent
- 了解Agent的应用场景

---

## 3.2.1 为什么需要Agent？

**问题**：
- 大语言模型只能生成文本
- 无法与外部世界交互
- 无法执行多步任务

**解决方案**：Agent系统
- Agent可以使用工具（Tool）
- Agent可以规划（Planning）
- Agent可以执行多步任务

## 3.2.2 Agent系统的架构

**核心组件**：
1. **LLM**：作为Agent的大脑
2. **工具（Tools）**：Agent可以使用的工具（如：搜索、计算器、API）
3. **记忆（Memory）**：存储历史对话
4. **规划（Planning）**：分解任务、制定计划

**工作流程**：
1. 用户输入任务
2. Agent使用LLM制定计划
3. Agent执行计划（使用工具）
4. Agent观察结果
5. Agent决定是否继续或结束

## 3.2.3 ReAct框架

**原理**：
- **Re**asoning（推理）+ **Act**ing（行动）
- 交替进行推理和行动

**流程**：
1. **Thought**（思考）：LLM思考下一步
2. **Action**（行动）：LLM选择工具并执行
3. **Observation**（观察）：观察工具返回的结果
4. 重复，直到任务完成

**使用LangChain实现ReAct Agent**：

\\`\\`\\`python
from langchain.agents import initialize_agent, Tool
from langchain.llms import OpenAI
from langchain.tools import DuckDuckGoSearchRun

# 1. 定义工具
search = DuckDuckGoSearchRun()
tools = [
    Tool(
        name="Search",
        func=search.run,
        description="Useful for when you need to answer questions about current events"
    )
]

# 2. 初始化LLM
llm = OpenAI(temperature=0)

# 3. 初始化Agent（使用ReAct框架）
agent = initialize_agent(
    tools,
    llm,
    agent="zero-shot-react-description",
    verbose=True
)

# 4. 使用Agent
response = agent.run("What is the capital of France?")
print(response)
\\`\\`\\`

## 3.2.4 Plan-and-Execute框架

**原理**：
- 先制定计划（Plan）
- 然后执行计划（Execute）

**使用LangChain实现Plan-and-Execute Agent**：

\\`\\`\\`python
from langchain.agents import create_plan_and_execute_agent
from langchain.llms import OpenAI
from langchain.tools import DuckDuckGoSearchRun, Tool

# 1. 定义工具
search = DuckDuckGoSearchRun()
tools = [
    Tool(
        name="Search",
        func=search.run,
        description="Useful for when you need to answer questions about current events"
    )
]

# 2. 初始化LLM
llm = OpenAI(temperature=0)

# 3. 创建Plan-and-Execute Agent
agent = create_plan_and_execute_agent(
    llm,
    tools,
    verbose=True
)

# 4. 使用Agent
response = agent.run("What is the capital of France and what is its population?")
print(response)
\\`\\`\\`

## 3.2.5 使用AutoGPT实现Agent

**AutoGPT**：
- 自动化的GPT Agent
- 可以自动分解任务、执行任务

**安装AutoGPT**：

\\`\\`\\`bash
pip install autogpt
\\`\\`\\`

**使用AutoGPT**：

\\`\\`\\`python
from autogpt import AutoGPT

# 1. 创建AutoGPT Agent
agent = AutoGPT(
    ai_name="ResearchAgent",
    ai_role="Researcher",
    memory=...,
    llm=...,
    tools=...
)

# 2. 运行Agent
agent.run("Research the latest developments in AI")
\\`\\`\\`

## 3.2.6 Agent系统的应用场景

**应用**：
1. **个人助理**：自动安排日程、发送邮件
2. **研究助手**：自动查找文献、总结论文
3. **代码助手**：自动生成代码、调试代码
4. **游戏AI**：自动玩游戏

---

## 实战练习

### 练习1：使用LangChain实现ReAct Agent

**任务**：
1. 使用LangChain实现一个ReAct Agent
2. 给Agent添加自定义工具
3. 测试Agent的性能

### 练习2：使用LangChain实现Plan-and-Execute Agent

**任务**：
1. 使用LangChain实现一个Plan-and-Execute Agent
2. 对比ReAct和Plan-and-Execute的性能

---

## 本章小结

在本节中，我们学习了：
1. **Agent的原理**：使用工具、规划、执行多步任务
2. **Agent系统的架构**：LLM、工具、记忆、规划
3. **ReAct框架**：推理 + 行动
4. **Plan-and-Execute框架**：先计划，后执行
5. **应用场景**：个人助理、研究助手等

**关键要点**：
- Agent可以扩展LLM的能力
- ReAct适合简单任务
- Plan-and-Execute适合复杂任务

**下一节预告**：我们将学习多模态系统。

---

**恭喜你完成了第3章第2节！** 🎉
        ');
INSERT INTO sections(id,"chapterId",title,description,"order",duration,content) VALUES('l5-ch3-sec3','l5-ch3','3.3 多模态系统','理解多模态模型的原理，掌握CLIP、DAL-E等模型的使用',3,1800,'
# 3.3 多模态系统

## 学习目标

通过本节学习，你将能够：
- 理解多模态模型的原理
- 掌握CLIP、DAL-E、Stable Diffusion等模型
- 使用Hugging Face Transformers进行多模态任务
- 了解多模态系统的应用场景

---

## 3.3.1 什么是多模态？

**定义**：
- 处理多种模态的数据（文本、图像、音频、视频）
- 实现跨模态的理解和生成

**代表性模型**：
- **CLIP**（OpenAI）：图像-文本对比学习
- **DAL-E**（OpenAI）：文本生成图像
- **Stable Diffusion**：文本生成图像（开源）
- **GPT-4V**：多模态大语言模型

## 3.3.2 CLIP（Contrastive Language-Image Pre-training）

**原理**：
- 使用对比学习（Contrastive Learning）
- 将图像和文本映射到同一嵌入空间

**使用Hugging Face Transformers**：

\\`\\`\\`python
from transformers import CLIPProcessor, CLIPModel
import torch

# 加载预训练的CLIP模型和处理器
model = CLIPModel.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

# 准备输入
images = ["image1.jpg", "image2.jpg"]
texts = ["a cat", "a dog"]

# 处理输入
inputs = processor(text=texts, images=images, return_tensors="pt", padding=True)

# 获取图像和文本的嵌入
with torch.no_grad():
    outputs = model(**inputs)
    image_embeddings = outputs.image_embeds
    text_embeddings = outputs.text_embeds

# 计算相似度
similarity = torch.matmul(image_embeddings, text_embeddings.T)
print(similarity)
\\`\\`\\`

## 3.3.3 DAL-E（文本生成图像）

**原理**：
- 使用Transformer架构
- 将文本编码为隐空间，然后生成图像

**使用Hugging Face Transformers**：

\\`\\`\\`python
from transformers import DalleBartProcessor, DalleBartForConditionalGeneration
import torch

# 加载预训练的DAL-E模型
processor = DalleBartProcessor.from_pretrained("dalle-mini/dalle-mini")
model = DalleBartForConditionalGeneration.from_pretrained("dalle-mini/dalle-mini")

# 准备输入
prompt = "a cat sitting on a mat"
inputs = processor(prompt, return_tensors="pt")

# 生成图像
with torch.no_grad():
    outputs = model.generate(**inputs, num_return_sequences=4)
    images = processor.decode(outputs)

# 保存图像
for i, image in enumerate(images):
    image.save(f"output_{i}.png")
\\`\\`\\`

## 3.3.4 Stable Diffusion（文本生成图像）

**原理**：
- 使用扩散模型（Diffusion Model）
- 逐步去噪生成图像

**使用Diffusers库**：

\\`\\`\\`python
from diffusers import StableDiffusionPipeline
import torch

# 加载预训练的Stable Diffusion模型
pipe = StableDiffusionPipeline.from_pretrained(
    "CompVis/stable-diffusion-v1-4",
    torch_dtype=torch.float16
).to("cuda")

# 生成图像
prompt = "a cat sitting on a mat"
image = pipe(prompt).images[0]

# 保存图像
image.save("output.png")
\\`\\`\\`

## 3.3.5 多模态系统的应用场景

**应用**：
1. **图像搜索**：使用文本搜索图像
2. **图像生成**：根据文本描述生成图像
3. **视觉问答**：回答关于图像的问题
4. **图像描述**：生成图像的描述

---

## 实战练习

### 练习1：使用CLIP进行图像-文本检索

**任务**：
1. 使用CLIP计算图像和文本的相似度
2. 实现图像搜索系统

### 练习2：使用Stable Diffusion生成图像

**任务**：
1. 使用Stable Diffusion生成图像
2. 调整生成参数，观察效果

---

## 本章小结

在本节中，我们学习了：
1. **多模态的定义**：处理多种模态的数据
2. **CLIP的原理**：图像-文本对比学习
3. **DAL-E/Stable Diffusion的原理**：文本生成图像
4. **应用场景**：图像搜索、图像生成等

**关键要点**：
- CLIP可以将图像和文本映射到同一嵌入空间
- DAL-E和Stable Diffusion可以生成高质量图像
- 多模态系统有很多实际应用

**下一章预告**：我们将学习前沿技术与未来趋势。

---

**恭喜你完成了第3章！** 🎉🎉🎉
        ');
INSERT INTO chapters(id,"courseId",title,description,"order") VALUES('l5-ch4','l5-llm-ai-systems','第4章：前沿技术与未来趋势','了解AI的前沿技术，包括多模态、具身智能、AI安全等',4);
INSERT INTO sections(id,"chapterId",title,description,"order",duration,content) VALUES('l5-ch4-sec1','l5-ch4','4.1 多模态大模型','了解多模态大模型的最新进展',1,1800,'
# 4.1 多模态大模型

## 学习目标

通过本节学习，你将能够：
- 了解多模态大模型的最新进展
- 掌握GPT-4V、LLaVA、Flamingo等模型
- 了解多模态大模型的训练方法
- 了解多模态大模型的应用场景

---

## 4.1.1 什么是多模态大模型？

**定义**：
- 可以处理多种模态的大语言模型
- 例如：GPT-4V（可以处理图像和文本）

**代表性模型**：
- **GPT-4V**（OpenAI）：多模态大语言模型
- **LLaVA**（开源）：大型语言视觉助手
- **Flamingo**（DeepMind）：视觉语言模型
- **Gemini**（Google）：多模态大语言模型

## 4.1.2 GPT-4V（GPT-4 with Vision）

**能力**：
- 可以处理图像和文本
- 可以回答关于图像的问题
- 可以生成图像描述

**使用OpenAI API**：

\\`\\`\\`python
import openai
import base64

# 1. 将图像转换为base64
def encode_image(image_path):
    with open(image_path, "rb") as image_file:
        return base64.b64encode(image_file.read()).decode(''utf-8'')

# 2. 调用GPT-4V API
response = openai.ChatCompletion.create(
    model="gpt-4-vision-preview",
    messages=[
        {
            "role": "user",
            "content": [
                {"type": "text", "text": "What is in this image?"},
                {
                    "type": "image_url",
                    "image_url": {
                        "url": f"data:image/jpeg;base64,{encode_image(''image.jpg'')}"
                    }
                }
            ]
        }
    ],
    max_tokens=300
)

print(response.choices[0].message.content)
\\`\\`\\`

## 4.1.3 LLaVA（Large Language and Vision Assistant）

**原理**：
- 使用CLIP作为视觉编码器
- 使用Vicuna（LLaMA的微调版）作为语言模型
- 通过投影层将视觉特征映射到语言空间

**使用LLaVA**：

\\`\\`\\`python
from transformers import LlavaForConditionalGeneration, LlavaProcessor
import torch
from PIL import Image

# 加载预训练的LLaVA模型和处理器
model = LlavaForConditionalGeneration.from_pretrained("llava-hf/llava-1.5-7b-hf")
processor = LlavaProcessor.from_pretrained("llava-hf/llava-1.5-7b-hf")

# 准备输入
image = Image.open("image.jpg")
prompt = "What is in this image?"

# 处理输入
inputs = processor(prompt, image, return_tensors="pt").to("cuda")

# 生成回答
with torch.no_grad():
    outputs = model.generate(**inputs, max_new_tokens=100)

# 解码输出
response = processor.decode(outputs[0], skip_special_tokens=True)
print(response)
\\`\\`\\`

## 4.1.4 多模态大模型的训练方法

**训练方法**：
1. **预训练**：在大规模图像-文本对上预训练
2. **指令微调**：使用指令-响应对进行微调
3. **人类对齐**：使用RLHF使模型输出更符合人类偏好

## 4.1.5 多模态大模型的应用场景

**应用**：
1. **图像问答**：回答关于图像的问题
2. **图像描述**：生成图像的描述
3. **视觉对话**：进行关于图像的对话
4. **文档理解**：理解包含图像和文本的文档

---

## 实战练习

### 练习1：使用GPT-4V API

**任务**：
1. 申请OpenAI API密钥
2. 使用GPT-4V API进行图像问答

### 练习2：使用LLaVA进行图像问答

**任务**：
1. 安装LLaVA
2. 使用LLaVA进行图像问答

---

## 本章小结

在本节中，我们学习了：
1. **多模态大模型的定义**：可以处理多种模态的大语言模型
2. **GPT-4V的原理**：多模态大语言模型
3. **LLaVA的原理**：使用CLIP和Vicuna
4. **训练方法**：预训练、指令微调、人类对齐
5. **应用场景**：图像问答、图像描述等

**关键要点**：
- 多模态大模型可以处理图像和文本
- GPT-4V是多模态大模型的代表
- LLaVA是开源的多模态大模型

**下一节预告**：我们将学习具身智能。

---

**恭喜你完成了第4章第1节！** 🎉
        ');
INSERT INTO sections(id,"chapterId",title,description,"order",duration,content) VALUES('l5-ch4-sec2','l5-ch4','4.2 具身智能（Embodied AI）','了解具身智能的概念和最新进展',2,1800,'
# 4.2 具身智能（Embodied AI）

## 学习目标

通过本节学习，你将能够：
- 理解具身智能的概念
- 了解具身智能的最新进展
- 了解具身智能的应用场景
- 了解具身智能的挑战

---

## 4.2.1 什么是具身智能？

**定义**：
- AI不仅要有"大脑"（算法），还要有"身体"（机器人）
- 通过与物理世界交互来学习

**代表性工作**：
- **RT-2**（Google）：机器人视觉-语言-动作模型
- **PaLM-E**（Google）：具身多模态语言模型
- **VoxPoser**（Stanford）：机器人学习

## 4.2.2 RT-2（Robotics Transformer 2）

**原理**：
- 基于VLM（Vision-Language Model）
- 输出机器人动作（离散化）

**特点**：
- 可以执行复杂指令（如："捡起即将从桌子上掉下来的物体"）
- 可以泛化到新任务

## 4.2.3 PaLM-E

**原理**：
- 多模态语言模型
- 可以接受图像、状态估计等输入
- 输出文本响应或机器人动作

**特点**：
- 多模态输入
- 多任务学习（视觉问答、图像描述、机器人规划）

## 4.2.4 具身智能的应用场景

**应用**：
1. **家庭机器人**：做家务、照顾老人
2. **仓储机器人**：搬运货物
3. **医疗机器人**：辅助手术
4. **探索机器人**：太空探索、深海探索

## 4.2.5 具身智能的挑战

**挑战**：
1. **数据稀缺**：真实世界数据难以获取
2. **仿真到现实的迁移**：仿真环境训练的策略难以迁移到真实世界
3. **安全性和鲁棒性**：在真实世界中保证安全很难

---

## 实战练习

### 练习1：了解RT-2

**任务**：
1. 阅读RT-2的论文
2. 了解RT-2的原理和应用

### 练习2：了解PaLM-E

**任务**：
1. 阅读PaLM-E的论文
2. 了解PaLM-E的原理和应用

---

## 本章小结

在本节中，我们学习了：
1. **具身智能的定义**：AI要有"身体"
2. **RT-2的原理**：基于VLM的机器人模型
3. **PaLM-E的原理**：多模态语言模型
4. **应用场景**：家庭、仓储、医疗等
5. **挑战**：数据稀缺、仿真到现实的迁移等

**关键要点**：
- 具身智能是AI的重要方向
- RT-2和PaLM-E是代表性工作
- 具身智能有很多实际应用

**下一节预告**：我们将学习AI安全。

---

**恭喜你完成了第4章第2节！** 🎉
        ');
INSERT INTO sections(id,"chapterId",title,description,"order",duration,content) VALUES('l5-ch4-sec3','l5-ch4','4.3 AI安全与对齐','了解AI安全和对齐的问题',3,1800,'
# 4.3 AI安全与对齐

## 学习目标

通过本节学习，你将能够：
- 理解AI安全和对齐的问题
- 了解对抗攻击、数据投毒等攻击方法
- 了解AI对齐的方法（如RLHF）
- 了解AI安全的应用场景

---

## 4.3.1 什么是AI安全？

**定义**：
- 防止AI系统被恶意利用
- 确保AI系统的行为符合人类价值观

**问题**：
1. **对抗攻击**（Adversarial Attacks）：通过微小扰动欺骗AI系统
2. **数据投毒**（Data Poisoning）：通过污染训练数据影响模型行为
3. **模型窃取**（Model Stealing）：通过查询API窃取模型
4. **有害内容生成**：大模型生成有害内容

## 4.3.2 对抗攻击（Adversarial Attacks）

**原理**：
- 在输入中添加微小扰动
- 导致模型做出错误预测

**示例**：
- 在图像中添加噪声，导致图像分类模型错误分类
- 在文本中添加特殊字符，导致文本分类模型错误分类

**防御方法**：
1. **对抗训练**（Adversarial Training）：在训练时加入对抗样本
2. **输入检测**（Input Detection）：检测输入是否为对抗样本
3. **随机化**（Randomization）：对输入进行随机变换

## 4.3.3 AI对齐（AI Alignment）

**问题**：
- 大模型可能生成有害内容
- 大模型的价值观可能与人类不一致

**解决方案**：AI对齐（AI Alignment）
- 使AI系统的行为符合人类价值观

**方法**：
1. **RLHF**（Reinforcement Learning from Human Feedback）：通过人类反馈进行强化学习
2. **Constitutional AI**：通过宪法原则指导AI行为
3. **Red Teaming**：通过模拟攻击发现AI系统的漏洞

## 4.3.4 AI安全的应用场景

**应用**：
1. **内容审核**：防止AI生成有害内容
2. **隐私保护**：防止AI泄露隐私信息
3. **模型保护**：防止模型被窃取或攻击
4. **安全部署**：确保AI系统安全部署

---

## 实战练习

### 练习1：实现对抗攻击

**任务**：
1. 使用FGSM（Fast Gradient Sign Method）生成对抗样本
2. 测试对抗样本的效果

### 练习2：了解RLHF

**任务**：
1. 阅读RLHF的论文
2. 了解RLHF的原理和应用

---

## 本章小结

在本节中，我们学习了：
1. **AI安全的定义**：防止AI系统被恶意利用
2. **对抗攻击的原理**：通过微小扰动欺骗AI系统
3. **AI对齐的方法**：RLHF、Constitutional AI、Red Teaming
4. **应用场景**：内容审核、隐私保护等

**关键要点**：
- AI安全是一个重要问题
- 对抗攻击可以欺骗AI系统
- AI对齐可以使AI系统更符合人类价值观

**下一节预告**：我们将学习未来趋势。

---

**恭喜你完成了第4章第3节！** 🎉
        ');
INSERT INTO sections(id,"chapterId",title,description,"order",duration,content) VALUES('l5-ch4-sec4','l5-ch4','4.4 未来趋势','了解AI的未来趋势',4,1800,'
# 4.4 未来趋势

## 学习目标

通过本节学习，你将能够：
- 了解AI的未来趋势
- 了解AGI（通用人工智能）的可能性
- 了解AI的伦理和社会影响
- 了解AI的研究方向

---

## 4.4.1 AI的未来趋势

**趋势**：
1. **更大的模型**：参数规模继续增长
2. **多模态**：处理更多模态（文本、图像、音频、视频）
3. **具身智能**：AI与物理世界交互
4. **AI对齐**：使AI更符合人类价值观
5. **边缘AI**：在边缘设备上部署AI

## 4.4.2 AGI（通用人工智能）

**定义**：
- 具有通用智能的AI
- 可以执行任何人类可以执行的任务

**现状**：
- 当前的AI是ANI（窄义人工智能）
- AGI仍然是一个遥远的目标

**挑战**：
1. **认知能力**：推理、规划、创造力
2. **迁移学习**：将一个任务上学到的知识迁移到另一个任务
3. **常识知识**：理解常识知识

## 4.4.3 AI的伦理和社会影响

**问题**：
1. **失业**：AI可能取代人类工作
2. **偏见**：AI可能放大社会偏见
3. **隐私**：AI可能侵犯隐私
4. **安全**：AI可能被恶意利用

**解决方案**：
1. **政策制定**：制定AI伦理和政策
2. **教育培训**：培训被AI取代的工人
3. **技术研究**：研究公平、可解释、隐私保护的AI

## 4.4.4 AI的研究方向

**方向**：
1. **更高效的学习**：少样本学习、零样本学习
2. **更可解释的AI**：理解AI的决策过程
3. **更鲁棒的AI**：对抗攻击、分布外检测
4. **更高效的部署**：模型压缩、量化、蒸馏

---

## 实战练习

### 练习1：思考AI的未来

**任务**：
1. 思考AI的未来趋势
2. 写一篇短文，描述你认为AI在未来10年的发展

### 练习2：思考AI的伦理问题

**任务**：
1. 思考AI可能带来的伦理问题
2. 写一篇短文，描述如何应对这些伦理问题

---

## 本章小结

在本节中，我们学习了：
1. **AI的未来趋势**：更大的模型、多模态、具身智能等
2. **AGI的定义**：具有通用智能的AI
3. **AI的伦理和社会影响**：失业、偏见、隐私、安全
4. **AI的研究方向**：更高效的学习、更可解释的AI等

**关键要点**：
- AI发展迅速，未来有很多可能性
- AGI仍然是一个遥远的目标
- AI的伦理和社会影响需要认真对待

---

## 课程总结

恭喜你完成了L5课程！在本课程中，我们学习了：
1. **大模型原理**：GPT、LLaMA等
2. **大模型训练技术**：分布式训练、混合精度训练等
3. **大模型部署与优化**：推理优化、量化、压缩等
4. **AI系统设计与实践**：RAG、Agent、多模态等
5. **前沿技术与未来趋势**：多模态大模型、具身智能、AI安全等

**关键要点**：
- 大模型是当前AI的核心
- 大模型训练和部署需要专业技术
- AI系统正在快速发展
- AI的未来充满机遇和挑战

**恭喜你完成了整个L1-L5课程体系！** 🎉🎉🎉

希望你通过这些课程，能够掌握AI的核心技术，并能够应用到实际工作中。

祝你在AI的道路上越走越远！ 🚀
        ');

-- Verify:
SELECT c.level,c.title,COUNT(DISTINCT ch.id)as chs,COUNT(DISTINCT s.id)as secs FROM courses c LEFT JOIN chapters ch ON c.id=ch."courseId" LEFT JOIN sections s ON ch.id=s."chapterId" GROUP BY c.level,c.title ORDER BY c.level;
COMMIT;
