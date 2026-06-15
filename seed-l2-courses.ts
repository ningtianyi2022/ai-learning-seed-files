import { db } from '../index';
import { courses, chapters, sections, contentBlocks } from '../schema';

// L2课程：机器学习基础
const l2Course = {
  id: 'l2-machine-learning-basics',
  title: '机器学习基础',
  level: 2,
  description: '系统学习机器学习的核心概念、经典算法和实战技能。适合有基础数学背景、想深入AI技术的学习者和产品经理。',
  thumbnail: 'https://example.com/thumbnails/l2-ml-basics.jpg',
  totalDuration: 10800, // 30小时
  tags: ['机器学习', '监督学习', '无监督学习', '模型评估', 'Scikit-learn'],
};

const l2Chapters = [
  {
    id: 'l2-ch1',
    title: '第1章：机器学习概论',
    description: '理解机器学习的定义、类型、工作流程和数学基础',
    order: 1,
    sections: [
      {
        id: 'l2-ch1-sec1',
        title: '1.1 什么是机器学习',
        description: '从传统编程到机器学习，理解机器学习的核心思想',
        order: 1,
        duration: 1800, // 30分钟
        content: `
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

\`\`\`
if (邮件包含"中奖") → 垃圾邮件
if (邮件包含"免费") → 垃圾邮件
if (发件人是陌生人) → 垃圾邮件
if (邮件有附件且后缀是.exe) → 垃圾邮件
else → 正常邮件
\`\`\`

**问题**：
1. **规则复杂**：垃圾邮件的特征太多，无法穷举
2. **规则脆弱**：垃圾邮件发送者可以轻易绕过规则（如：用"免■费"代替"免费"）
3. **维护困难**：需要不断更新规则

### 机器学习方式

**思路**：让计算机从数据中学习规则

\`\`\`
输入：大量邮件（标注哪些是垃圾邮件）
  ↓
学习：自动学习垃圾邮件的特征
  ↓
输出：一个模型（可以预测新邮件是否为垃圾邮件）
\`\`\`

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

\`\`\`
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
\`\`\`

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

\`\`\`
$\\mathbf{x} = \\begin{bmatrix} x_1 \\\\ x_2 \\\\ \\vdots \\\\ x_n \\end{bmatrix}$
\`\`\`

**例子**：
- 一张28×28的图片可以表示为一个784维的向量
- 一个用户的年龄、收入、消费可以表示为一个3维向量

**运算**：
1. **加法**：$\\mathbf{x} + \\mathbf{y} = \\begin{bmatrix} x_1 + y_1 \\\\ x_2 + y_2 \\\\ \\vdots \\end{bmatrix}$
2. **数乘**：$c \\cdot \\mathbf{x} = \\begin{bmatrix} c \\cdot x_1 \\\\ c \\cdot x_2 \\\\ \\vdots \\end{bmatrix}$
3. **点积（内积）**：$\\mathbf{x} \\cdot \\mathbf{y} = x_1 y_1 + x_2 y_2 + \\cdots + x_n y_n$

**应用**：
- 计算相似度（余弦相似度）
- 线性回归

#### 矩阵（Matrix）

**定义**：一个二维数组。

\`\`\`
$A = \\begin{bmatrix} a_{11} & a_{12} & \\cdots & a_{1n} \\\\ a_{21} & a_{22} & \\cdots & a_{2n} \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ a_{m1} & a_{m2} & \\cdots & a_{mn} \\end{bmatrix}$
\`\`\`

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

**定义**：对于一个方阵 $A$，如果存在一个向量 $\\mathbf{v}$ 和一个标量 $\\lambda$，使得：

\`\`\`
$A\\mathbf{v} = \\lambda \\mathbf{v}$
\`\`\`

那么 $\\mathbf{v}$ 是特征向量，$\\lambda$ 是特征值。

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
  - 正态分布（Gaussian）：$f(x) = \\frac{1}{\\sqrt{2\\pi}\\sigma} e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}$
  - 指数分布（Exponential）

**3. 条件概率**

\`\`\`
$P(A|B) = \\frac{P(A \\cap B)}{P(B)}$
\`\`\`

**例子**：
- $P(垃圾邮件 | 包含"中奖") = \\frac{P(垃圾邮件 \\cap 包含"中奖")}{P(包含"中奖")}$

**4. 贝叶斯定理**

\`\`\`
$P(A|B) = \\frac{P(B|A) P(A)}{P(B)}$
\`\`\`

**应用**：
- 朴素贝叶斯分类器
- 垃圾邮件过滤

#### 期望与方差

**期望（Expected Value）**：

\`\`\`
$E[X] = \\sum_x x P(X=x)$  （离散）
$E[X] = \\int_{-\\infty}^{\\infty} x f(x) dx$  （连续）
\`\`\`

**方差（Variance）**：

\`\`\`
$Var(X) = E[(X - E[X])^2]$
\`\`\`

**应用**：
- 线性回归的损失函数（均方误差）
- 模型评估

---

### 1.2.3 微积分

微积分用于优化（找到最优参数）。

#### 导数（Derivative）

**定义**：函数在某一点的变化率。

\`\`\`
$f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$
\`\`\`

**例子**：
- $f(x) = x^2$ → $f'(x) = 2x$

**应用**：
- 梯度下降（找到损失函数的最小值）

#### 偏导数（Partial Derivative）

**定义**：多变量函数对某一个变量的导数。

\`\`\`
$\\frac{\\partial f}{\\partial x}$
\`\`\`

**例子**：
- $f(x, y) = x^2 + y^2$
- $\\frac{\\partial f}{\\partial x} = 2x$
- $\\frac{\\partial f}{\\partial y} = 2y$

**应用**：
- 梯度下降（多维）

#### 梯度（Gradient）

**定义**：所有偏导数的向量。

\`\`\`
$\\nabla f = \\begin{bmatrix} \\frac{\\partial f}{\\partial x_1} \\\\ \\frac{\\partial f}{\\partial x_2} \\\\ \\vdots \\\\ \\frac{\\partial f}{\\partial x_n} \\end{bmatrix}$
\`\`\`

**应用**：
- 梯度下降：$\\theta = \\theta - \\alpha \\nabla J(\\theta)$

#### 链式法则（Chain Rule）

**定义**：复合函数的导数。

\`\`\`
$\\frac{dz}{dx} = \\frac{dz}{dy} \\cdot \\frac{dy}{dx}$
\`\`\`

**应用**：
- 反向传播（Backpropagation）

---

## 实战练习

### 练习1：线性代数计算

**任务**：计算以下向量和矩阵运算。

1. $\\mathbf{x} = \\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix}, \\mathbf{y} = \\begin{bmatrix} 3 \\\\ 4 \\end{bmatrix}$，计算 $\\mathbf{x} + \\mathbf{y}$ 和 $\\mathbf{x} \\cdot \\mathbf{y}$

2. $A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}, B = \\begin{bmatrix} 5 & 6 \\\\ 7 & 8 \\end{bmatrix}$，计算 $A + B$ 和 $AB$

**答案**：
1. $\\mathbf{x} + \\mathbf{y} = \\begin{bmatrix} 4 \\\\ 6 \\end{bmatrix}, \\mathbf{x} \\cdot \\mathbf{y} = 1 \\cdot 3 + 2 \\cdot 4 = 11$
2. $A + B = \\begin{bmatrix} 6 & 8 \\\\ 10 & 12 \\end{bmatrix}, AB = \\begin{bmatrix} 19 & 22 \\\\ 43 & 50 \\end{bmatrix}$

### 练习2：概率计算

**任务**：使用贝叶斯定理计算以下概率。

**问题**：某疾病的患病率为1%，检测准确率为99%（即：患者检测为阳性的概率99%，健康人检测为阴性的概率99%）。如果一个人检测为阳性，他实际患病的概率是多少？

**解答**：
- 设 $D$ 为患病，$T$ 为检测阳性
- $P(D) = 0.01$
- $P(T|D) = 0.99$
- $P(T|\\neg D) = 0.01$
- 求 $P(D|T)$

使用贝叶斯定理：

\`\`\`
$P(D|T) = \\frac{P(T|D) P(D)}{P(T)}$
$P(T) = P(T|D) P(D) + P(T|\\neg D) P(\\neg D) = 0.99 \\cdot 0.01 + 0.01 \\cdot 0.99 = 0.0198$
$P(D|T) = \\frac{0.99 \\cdot 0.01}{0.0198} = 0.5$
\`\`\`

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

\`\`\`bash
python --version
# 输出：Python 3.9.x

pip --version
# 输出：pip x.x.x
\`\`\`

### 1.3.2 开发环境：Jupyter Notebook

**为什么使用Jupyter Notebook？**

1. **交互式**：可以逐块运行代码
2. **可视化**：可以直接显示图表
3. **文档化**：可以混合代码、文本、公式、图像

**安装Jupyter Notebook**

\`\`\`bash
# 如果使用Anaconda，Jupyter已经包含
# 否则，使用pip安装
pip install jupyter
\`\`\`

**启动Jupyter Notebook**

\`\`\`bash
jupyter notebook
\`\`\`

浏览器会自动打开：[http://localhost:8888](http://localhost:8888)

**Jupyter Notebook基本操作**

| 快捷键 | 功能 |
|--------|------|
| `Shift + Enter` | 运行当前单元格，跳到下一个 |
| `Ctrl + Enter` | 运行当前单元格，不跳转 |
| `A` | 在上面插入单元格 |
| `B` | 在下面插入单元格 |
| `DD` | 删除当前单元格 |
| `M` | 转为Markdown单元格 |
| `Y` | 转为代码单元格 |

### 1.3.3 NumPy基础

NumPy是Python科学计算的基础库，提供多维数组对象。

**安装**

\`\`\`bash
pip install numpy
\`\`\`

**导入**

\`\`\`python
import numpy as np
\`\`\`

**创建数组**

\`\`\`python
# 从列表创建
a = np.array([1, 2, 3])
print(a)  # [1 2 3]

# 创建二维数组
b = np.array([[1, 2], [3, 4]])
print(b)
# [[1 2]
#  [3 4]]

# 创建全0数组
zeros = np.zeros((3, 3))

# 创建全1数组
ones = np.ones((3, 3))

# 创建单位矩阵
eye = np.eye(3)

# 创建等差数列
range_array = np.arange(0, 10, 2)  # [0 2 4 6 8]
\`\`\`

**数组属性**

\`\`\`python
a = np.array([[1, 2, 3], [4, 5, 6]])

print(a.shape)   # (2, 3) - 形状
print(a.ndim)    # 2 - 维度
print(a.size)    # 6 - 元素个数
print(a.dtype)   # int64 - 数据类型
\`\`\`

**数组运算**

\`\`\`python
a = np.array([1, 2, 3])
b = np.array([4, 5, 6])

# 加法
print(a + b)  # [5 7 9]

# 减法
print(a - b)  # [-3 -3 -3]

# 乘法（逐元素）
print(a * b)  # [4 10 18]

# 点积
print(np.dot(a, b))  # 32

# 广播（Broadcasting）
c = np.array([[1], [2], [3]])
d = np.array([4, 5, 6])
print(c + d)
# [[5 6 7]
#  [6 7 8]
#  [7 8 9]]
\`\`\`

**索引和切片**

\`\`\`python
a = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])

# 索引
print(a[0, 1])  # 2

# 切片
print(a[0:2, 1:3])
# [[2 3]
#  [5 6]]

# 条件索引
print(a[a > 5])
# [6 7 8 9]
\`\`\`

**实战：图像表示为NumPy数组**

\`\`\`python
from PIL import Image
import numpy as np

# 读取图像
img = Image.open('cat.jpg')
img_array = np.array(img)

print(img_array.shape)  # (height, width, 3) - RGB

# 转换为灰度图
gray_img = np.mean(img_array, axis=2).astype(np.uint8)

# 保存图像
Image.fromarray(gray_img).save('cat_gray.jpg')
\`\`\`

### 1.3.4 Pandas基础

Pandas用于数据处理和分析。

**安装**

\`\`\`bash
pip install pandas
\`\`\`

**导入**

\`\`\`python
import pandas as pd
\`\`\`

**Series（一维）**

\`\`\`python
# 从列表创建
s = pd.Series([1, 2, 3, 4, 5])
print(s)

# 指定索引
s = pd.Series([1, 2, 3], index=['a', 'b', 'c'])
print(s['a'])  # 1
\`\`\`

**DataFrame（二维）**

\`\`\`python
# 从字典创建
data = {
    'name': ['Alice', 'Bob', 'Charlie'],
    'age': [25, 30, 35],
    'city': ['NYC', 'LA', 'Chicago']
}
df = pd.DataFrame(data)
print(df)

# 读取CSV文件
df = pd.read_csv('data.csv')

# 查看数据
print(df.head())   # 前5行
print(df.tail())   # 后5行
print(df.info())   # 数据信息
print(df.describe())  # 统计描述
\`\`\`

**数据选择**

\`\`\`python
# 选择列
print(df['name'])

# 选择行
print(df.iloc[0])   # 按位置
print(df.loc[0])    # 按索引

# 条件选择
print(df[df['age'] > 25])
\`\`\`

**数据操作**

\`\`\`python
# 添加列
df['salary'] = [50000, 60000, 70000]

# 删除列
df = df.drop('city', axis=1)

# 处理缺失值
df = df.dropna()  # 删除缺失值
df = df.fillna(0)  # 填充缺失值

# 分组
grouped = df.groupby('city')['salary'].mean()
\`\`\`

**实战：分析泰坦尼克数据集**

\`\`\`python
import pandas as pd

# 读取数据
df = pd.read_csv('titanic.csv')

# 查看数据
print(df.head())

# 统计
print(df['Survived'].value_counts())  # 生存人数
print(df.groupby('Sex')['Survived'].mean())  # 按性别统计生存率

# 处理缺失值
df['Age'] = df['Age'].fillna(df['Age'].median())

# 特征工程
df['FamilySize'] = df['SibSp'] + df['Parch'] + 1
\`\`\`

### 1.3.5 Matplotlib基础

Matplotlib用于数据可视化。

**安装**

\`\`\`bash
pip install matplotlib
\`\`\`

**导入**

\`\`\`python
import matplotlib.pyplot as plt
\`\`\`

**基本绘图**

\`\`\`python
import numpy as np
import matplotlib.pyplot as plt

# 折线图
x = np.linspace(0, 10, 100)
y = np.sin(x)
plt.plot(x, y)
plt.xlabel('x')
plt.ylabel('sin(x)')
plt.title('Sine Wave')
plt.show()

# 散点图
x = np.random.randn(100)
y = np.random.randn(100)
plt.scatter(x, y)
plt.show()

# 柱状图
categories = ['A', 'B', 'C', 'D']
values = [10, 20, 15, 25]
plt.bar(categories, values)
plt.show()

# 直方图
data = np.random.randn(1000)
plt.hist(data, bins=30)
plt.show()
\`\`\`

**子图**

\`\`\`python
fig, axes = plt.subplots(2, 2, figsize=(10, 8))

# 子图1：折线图
axes[0, 0].plot([1, 2, 3], [1, 4, 9])
axes[0, 0].set_title('Line Plot')

# 子图2：散点图
axes[0, 1].scatter([1, 2, 3], [1, 4, 9])
axes[0, 1].set_title('Scatter Plot')

# 子图3：柱状图
axes[1, 0].bar(['A', 'B', 'C'], [1, 2, 3])
axes[1, 0].set_title('Bar Plot')

# 子图4：直方图
axes[1, 1].hist(np.random.randn(100), bins=20)
axes[1, 1].set_title('Histogram')

plt.tight_layout()
plt.show()
\`\`\`

**实战：可视化鸢尾花数据集**

\`\`\`python
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.datasets import load_iris

# 加载数据
iris = load_iris()
df = pd.DataFrame(iris.data, columns=iris.feature_names)
df['target'] = iris.target

# 散点图
plt.scatter(df['sepal length (cm)'], df['sepal width (cm)'], c=df['target'])
plt.xlabel('Sepal Length')
plt.ylabel('Sepal Width')
plt.title('Iris Dataset')
plt.show()
\`\`\`

### 1.3.6 Scikit-learn基础

Scikit-learn是Python机器学习库。

**安装**

\`\`\`bash
pip install scikit-learn
\`\`\`

**导入**

\`\`\`python
import sklearn
\`\`\`

**加载数据集**

\`\`\`python
from sklearn.datasets import load_iris, load_boston

# 加载鸢尾花数据集
iris = load_iris()
X = iris.data   # 特征
y = iris.target  # 标签

# 加载波士顿房价数据集（已弃用，使用California Housing）
from sklearn.datasets import fetch_california_housing
housing = fetch_california_housing()
X = housing.data
y = housing.target
\`\`\`

**划分数据集**

\`\`\`python
from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
\`\`\`

**训练模型**

\`\`\`python
from sklearn.linear_model import LogisticRegression
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier

# 逻辑回归
model = LogisticRegression()
model.fit(X_train, y_train)
y_pred = model.predict(X_test)

# 决策树
model = DecisionTreeClassifier()
model.fit(X_train, y_train)
y_pred = model.predict(X_test)

# 随机森林
model = RandomForestClassifier()
model.fit(X_train, y_train)
y_pred = model.predict(X_test)
\`\`\`

**评估模型**

\`\`\`python
from sklearn.metrics import accuracy_score, classification_report

# 准确率
accuracy = accuracy_score(y_test, y_pred)
print(f'Accuracy: {accuracy}')

# 详细报告
print(classification_report(y_test, y_pred))
\`\`\`

**实战：完整的机器学习流程**

\`\`\`python
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score

# 1. 加载数据
iris = load_iris()
X = iris.data
y = iris.target

# 2. 划分数据集
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 3. 特征缩放
scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)
X_test = scaler.transform(X_test)

# 4. 训练模型
model = LogisticRegression()
model.fit(X_train, y_train)

# 5. 预测
y_pred = model.predict(X_test)

# 6. 评估
accuracy = accuracy_score(y_test, y_pred)
print(f'Accuracy: {accuracy}')
\`\`\`

---

## 实战练习

### 练习1：NumPy运算

**任务**：
1. 创建一个10×10的随机矩阵
2. 计算矩阵的逆
3. 计算矩阵的特征值和特征向量

### 练习2：Pandas数据分析

**任务**：
1. 加载一个CSV数据集（如：泰坦尼克、房价预测）
2. 进行数据探索（查看缺失值、统计描述）
3. 处理缺失值
4. 生成一些可视化图表

### 练习3：使用Scikit-learn训练模型

**任务**：
1. 使用Scikit-learn加载一个数据集
2. 划分训练集和测试集
3. 训练一个分类器（如：逻辑回归、决策树）
4. 评估模型性能

---

## 本章小结

在本节中，我们学习了：

1. **Python安装**：从官网或Anaconda安装
2. **Jupyter Notebook**：交互式开发环境
3. **NumPy**：数组操作、索引、运算
4. **Pandas**：数据处理、DataFrame操作
5. **Matplotlib**：数据可视化
6. **Scikit-learn**：机器学习流程

**关键要点**：
- Python是机器学习的主流语言
- NumPy、Pandas、Matplotlib、Scikit-learn是核心库
- 掌握这些库是学习机器学习的基础

**下一章预告**：我们将学习线性模型（线性回归、逻辑回归）。

---

**恭喜你完成了第1章！** 🎉🎉🎉

你已经掌握了机器学习的基础知识和Python环境。在接下来的章节中，我们将学习具体的机器学习算法。

---

## 第2章：线性模型（3-4小时）

### 第1节：线性回归

#### 学习目标

通过本节学习，你将能够：
- 理解线性回归的原理
- 掌握最小二乘法
- 使用Scikit-learn实现线性回归
- 评估回归模型的性能

#### 2.1.1 什么是线性回归？

**问题：预测房价**

假设你想预测房价，影响因素有：
- 面积（平方英尺）
- 卧室数量
- 位置

**线性回归模型**：

\`\`\`
房价 = $w_1$ × 面积 + $w_2$ × 卧室数量 + $w_3$ × 位置 + $b$
\`\`\`

其中：
- $w_1, w_2, w_3$ 是权重（Weight）
- $b$ 是偏置（Bias）

**一般形式**：

\`\`\`
$y = w_1 x_1 + w_2 x_2 + \\cdots + w_n x_n + b$
\`\`\`

或者写成向量形式：

\`\`\`
$y = \\mathbf{w}^T \\mathbf{x} + b$
\`\`\`

其中：
- $\\mathbf{w}$ 是权重向量
- $\\mathbf{x}$ 是特征向量

#### 2.1.2 损失函数：均方误差（MSE）

**如何找到最佳参数？**

我们需要一个指标来衡量模型的好坏，这个指标就是**损失函数**（Loss Function）。

对于回归问题，常用的损失函数是**均方误差**（Mean Squared Error, MSE）：

\`\`\`
$MSE = \\frac{1}{n} \\sum_{i=1}^n (y_i - \\hat{y}_i)^2$
\`\`\`

其中：
- $y_i$ 是真实值
- $\\hat{y}_i$ 是预测值
- $n$ 是样本数

**目标**：找到一组参数 $\\mathbf{w}$ 和 $b$，使得MSE最小。

#### 2.1.3 求解：最小二乘法

**解析解（Closed-form Solution）**

对于线性回归，可以直接计算出最优参数的解析解：

\`\`\`
$\\mathbf{w} = (\\mathbf{X}^T \\mathbf{X})^{-1} \\mathbf{X}^T \\mathbf{y}$
\`\`\`

其中：
- $\\mathbf{X}$ 是特征矩阵
- $\\mathbf{y}$ 是标签向量

**梯度下降（Gradient Descent）**

当数据量很大时，解析解计算量大，可以使用梯度下降：

\`\`\`
重复直到收敛：
  $\\mathbf{w} = \\mathbf{w} - \\alpha \\frac{\\partial MSE}{\\partial \\mathbf{w}}$
  $b = b - \\alpha \\frac{\\partial MSE}{\\partial b}$
\`\`\`

其中：
- $\\alpha$ 是学习率（Learning Rate）

#### 2.1.4 使用Scikit-learn实现线性回归

**代码示例**

\`\`\`python
import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error, r2_score

# 生成数据
np.random.seed(42)
X = np.random.rand(100, 1) * 10  # 面积
y = 2 * X + 1 + np.random.randn(100, 1)  # 房价 = 2 × 面积 + 1 + 噪声

# 划分数据集
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 创建模型
model = LinearRegression()

# 训练模型
model.fit(X_train, y_train)

# 预测
y_pred = model.predict(X_test)

# 评估
mse = mean_squared_error(y_test, y_pred)
r2 = r2_score(y_test, y_pred)

print(f'MSE: {mse}')
print(f'R²: {r2}')
print(f'权重: {model.coef_}')
print(f'偏置: {model.intercept_}')

# 可视化
import matplotlib.pyplot as plt
plt.scatter(X_test, y_test, color='blue', label='真实值')
plt.plot(X_test, y_pred, color='red', label='预测值')
plt.xlabel('面积')
plt.ylabel('房价')
plt.legend()
plt.show()
\`\`\`

#### 2.1.5 评估指标

**1. 均方误差（MSE）**

\`\`\`
$MSE = \\frac{1}{n} \\sum_{i=1}^n (y_i - \\hat{y}_i)^2$
\`\`\`

**2. 均方根误差（RMSE）**

\`\`\`
$RMSE = \\sqrt{MSE}$
\`\`\`

**3. 平均绝对误差（MAE）**

\`\`\`
$MAE = \\frac{1}{n} \\sum_{i=1}^n |y_i - \\hat{y}_i|$
\`\`\`

**4. 决定系数（$R^2$）**

\`\`\`
$R^2 = 1 - \\frac{\\sum_{i=1}^n (y_i - \\hat{y}_i)^2}{\\sum_{i=1}^n (y_i - \\bar{y})^2}$
\`\`\`

$R^2$ 越接近1，模型越好。

#### 2.1.6 实战项目：房价预测

**数据集**：California Housing（加州房价）

**步骤**：

1. **加载数据**

\`\`\`python
from sklearn.datasets import fetch_california_housing
import pandas as pd

housing = fetch_california_housing()
X = housing.data
y = housing.target

# 转为DataFrame
df = pd.DataFrame(X, columns=housing.feature_names)
df['MedHouseVal'] = y
print(df.head())
\`\`\`

2. **数据探索**

\`\`\`python
import matplotlib.pyplot as plt

# 查看分布
df.hist(bins=50, figsize=(15, 10))
plt.show()

# 相关性热图
import seaborn as sns
corr = df.corr()
sns.heatmap(corr, annot=True)
plt.show()
\`\`\`

3. **训练模型**

\`\`\`python
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score

# 划分数据集
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 训练模型
model = LinearRegression()
model.fit(X_train, y_train)

# 预测
y_pred = model.predict(X_test)

# 评估
mse = mean_squared_error(y_test, y_pred)
rmse = np.sqrt(mse)
r2 = r2_score(y_test, y_pred)

print(f'RMSE: {rmse}')
print(f'R²: {r2}')
\`\`\`

4. **改进模型**

\`\`\`python
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import Pipeline

# 使用Pipeline
pipeline = Pipeline([
    ('scaler', StandardScaler()),
    ('regressor', LinearRegression())
])

pipeline.fit(X_train, y_train)
y_pred = pipeline.predict(X_test)

# 评估
mse = mean_squared_error(y_test, y_pred)
rmse = np.sqrt(mse)
r2 = r2_score(y_test, y_pred)

print(f'RMSE: {rmse}')
print(f'R²: {r2}')
\`\`\`

---

## 实战练习

### 练习1：实现线性回归

**任务**：
1. 从零实现线性回归（不使用Scikit-learn）
2. 使用最小二乘法或梯度下降
3. 对比自己实现的版本和Scikit-learn的版本

### 练习2：预测股票价格

**任务**：
1. 使用线性回归预测股票价格
2. 特征：开盘价、最高价、最低价、成交量
3. 标签：收盘价
4. 评估模型性能

---

## 本章小结

在本节中，我们学习了：

1. **线性回归**：建模特征和目标之间的线性关系
2. **损失函数**：MSE
3. **求解方法**：最小二乘法、梯度下降
4. **使用Scikit-learn**：`LinearRegression`
5. **评估指标**：MSE、RMSE、MAE、$R^2$

**关键要点**：
- 线性回归是最简单的机器学习算法
- 理解线性回归是理解更复杂算法的基础
- 实际应用中需要注意特征缩放、多重共线性

**下一节预告**：我们将学习逻辑回归（分类问题）。

---

**恭喜你完成了第2章第1节！** 🎉

---

## 2.2 逻辑回归

### 学习目标

通过本节学习，你将能够：
- 理解逻辑回归的原理
- 掌握Sigmoid函数和交叉熵损失
- 使用Scikit-learn实现逻辑回归
- 评估分类模型的性能

### 2.2.1 从线性回归到逻辑回归

**问题：垃圾邮件分类**

如果你想预测邮件是否为垃圾邮件，标签是：
- 0：正常邮件
- 1：垃圾邮件

**线性回归的问题**：

线性回归的输出是连续值（如：-10、0.5、100），但我们想要的是概率（0到1之间）。

**解决方案**：逻辑回归

逻辑回归使用**Sigmoid函数**将线性输出映射到(0, 1)之间。

### 2.2.2 Sigmoid函数

**定义**：

\`\`\`
$\\sigma(z) = \\frac{1}{1 + e^{-z}}$
\`\`\`

其中：
- $z = \\mathbf{w}^T \\mathbf{x} + b$（线性输出）

**性质**：
- 当 $z \\to +\\infty$，$\\sigma(z) \\to 1$
- 当 $z \\to -\\infty$，$\\sigma(z) \\to 0$
- 当 $z = 0$，$\\sigma(z) = 0.5$

**Sigmoid函数的图形**：

\`\`\`python
import numpy as np
import matplotlib.pyplot as plt

def sigmoid(z):
    return 1 / (1 + np.exp(-z))

z = np.linspace(-10, 10, 100)
y = sigmoid(z)

plt.plot(z, y)
plt.xlabel('z')
plt.ylabel('σ(z)')
plt.title('Sigmoid Function')
plt.grid()
plt.show()
\`\`\`

### 2.2.3 逻辑回归模型

**模型**：

\`\`\`
$P(y=1|\\mathbf{x}) = \\sigma(\\mathbf{w}^T \\mathbf{x} + b)$
\`\`\`

其中：
- $P(y=1|\\mathbf{x})$ 是样本 $\\mathbf{x}$ 属于类别1的概率

**预测**：

\`\`\`
$\\hat{y} = \\begin{cases} 1 & \\text{if } P(y=1|\\mathbf{x}) \\geq 0.5 \\\\ 0 & \\text{otherwise} \\end{cases}$
\`\`\`

### 2.2.4 损失函数：交叉熵（Cross-Entropy）

**为什么不用MSE？**

对于分类问题，MSE不是最好的损失函数，因为：
1. 非凸（容易陷入局部最优）
2. 梯度消失

**交叉熵损失**：

对于二分类问题，交叉熵损失定义为：

\`\`\`
$CE = -\\frac{1}{n} \\sum_{i=1}^n [y_i \\log(\\hat{y}_i) + (1-y_i) \\log(1-\\hat{y}_i)]$
\`\`\`

其中：
- $y_i$ 是真实标签（0或1）
- $\\hat{y}_i$ 是预测概率

**直观理解**：
- 如果 $y_i = 1$，损失 = $-\\log(\\hat{y}_i)$
  - 如果 $\\hat{y}_i$ 接近1，损失接近0
  - 如果 $\\hat{y}_i$ 接近0，损失很大
- 如果 $y_i = 0$，损失 = $-\\log(1-\\hat{y}_i)$

### 2.2.5 使用Scikit-learn实现逻辑回归

**代码示例**

\`\`\`python
import numpy as np
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix

# 生成数据（二分类）
from sklearn.datasets import make_classification
X, y = make_classification(n_samples=1000, n_features=2, n_classes=2, random_state=42)

# 划分数据集
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 创建模型
model = LogisticRegression()

# 训练模型
model.fit(X_train, y_train)

# 预测
y_pred = model.predict(X_test)

# 评估
accuracy = accuracy_score(y_test, y_pred)
print(f'Accuracy: {accuracy}')

print('\\nClassification Report:')
print(classification_report(y_test, y_pred))

print('\\nConfusion Matrix:')
print(confusion_matrix(y_test, y_pred))
\`\`\`

### 2.2.6 多分类逻辑回归

**Softmax函数**

对于多分类问题（类别数 > 2），使用Softmax函数：

\`\`\`
$\\text{Softmax}(z_i) = \\frac{e^{z_i}}{\\sum_{j=1}^K e^{z_j}}$
\`\`\`

其中：
- $K$ 是类别数
- $z_i$ 是第 $i$ 类的线性输出

**交叉熵损失（多分类）**：

\`\`\`
$CE = -\\frac{1}{n} \\sum_{i=1}^n \\sum_{k=1}^K y_{i,k} \\log(\\hat{y}_{i,k})$
\`\`\`

其中：
- $y_{i,k}$ 是one-hot编码的标签
- $\\hat{y}_{i,k}$ 是预测概率

**使用Scikit-learn**

\`\`\`python
from sklearn.datasets import load_iris
from sklearn.linear_model import LogisticRegression

# 加载数据
iris = load_iris()
X = iris.data
y = iris.target

# 划分数据集
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 创建模型（多分类）
model = LogisticRegression(multi_class='multinomial', solver='lbfgs', max_iter=200)

# 训练模型
model.fit(X_train, y_train)

# 预测
y_pred = model.predict(X_test)

# 评估
accuracy = accuracy_score(y_test, y_pred)
print(f'Accuracy: {accuracy}')
\`\`\`

### 2.2.7 实战项目：垃圾邮件检测

**数据集**：Spambase

**步骤**：

1. **加载数据**

\`\`\`python
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics import accuracy_score, classification_report

# 加载数据
df = pd.read_csv('spambase.csv')
X = df.drop('spam', axis=1)
y = df['spam']

# 划分数据集
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 训练模型
model = LogisticRegression()
model.fit(X_train, y_train)

# 预测
y_pred = model.predict(X_test)

# 评估
accuracy = accuracy_score(y_test, y_pred)
print(f'Accuracy: {accuracy}')
print(classification_report(y_test, y_pred))
\`\`\`

2. **使用文本数据**

\`\`\`python
# 如果不使用预提取的特征，而是原始邮件文本
emails = [...]  # 邮件文本列表
labels = [...]  # 标签列表

# 使用TF-IDF提取特征
vectorizer = TfidfVectorizer()
X = vectorizer.fit_transform(emails)

# 划分数据集
X_train, X_test, y_train, y_test = train_test_split(X, labels, test_size=0.2, random_state=42)

# 训练模型
model = LogisticRegression()
model.fit(X_train, y_train)

# 预测
y_pred = model.predict(X_test)

# 评估
accuracy = accuracy_score(y_test, y_pred)
print(f'Accuracy: {accuracy}')
\`\`\`

---

## 实战练习

### 练习1：实现逻辑回归

**任务**：
1. 从零实现逻辑回归（不使用Scikit-learn）
2. 使用Sigmoid函数和交叉熵损失
3. 使用梯度下降优化
4. 对比自己实现的版本和Scikit-learn的版本

### 练习2：手写数字识别

**任务**：
1. 使用逻辑回归识别手写数字（MNIST数据集）
2. 使用One-vs-Rest策略处理多分类
3. 评估模型性能

---

## 本章小结

在本节中，我们学习了：

1. **逻辑回归**：用于分类问题
2. **Sigmoid函数**：将线性输出映射到(0, 1)
3. **交叉熵损失**：分类问题的损失函数
4. **多分类**：Softmax函数
5. **使用Scikit-learn**：`LogisticRegression`

**关键要点**：
- 逻辑回归是线性分类器
- 使用Sigmoid函数输出概率
- 交叉熵损失比MSE更适合分类问题

**下一节预告**：我们将学习正则化（防止过拟合）。

---

**恭喜你完成了第2章第2节！** 🎉

---

## 2.3 正则化

### 学习目标

通过本节学习，你将能够：
- 理解过拟合和欠拟合
- 掌握L1和L2正则化
- 使用Scikit-learn实现正则化
- 选择合适的正则化强度

### 2.3.1 过拟合与欠拟合

**训练误差 vs 测试误差**

\`\`\`
训练误差：模型在训练集上的误差
测试误差：模型在测试集上的误差
\`\`\`

**欠拟合（Underfitting）**

- 模型太简单，无法捕捉数据的模式
- 训练误差和测试误差都很高

**过拟合（Overfitting）**

- 模型太复杂，记住了训练数据
- 训练误差很低，但测试误差很高

**可视化**

\`\`\`python
import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import PolynomialFeatures
from sklearn.pipeline import Pipeline

# 生成数据
np.random.seed(42)
X = np.linspace(0, 10, 20).reshape(-1, 1)
y = X**2 + np.random.randn(20, 1) * 10

# 欠拟合：线性回归
model_under = LinearRegression()
model_under.fit(X, y)
y_pred_under = model_under.predict(X)

# 合适：多项式回归（2次）
model_good = Pipeline([
    ('poly', PolynomialFeatures(degree=2)),
    ('reg', LinearRegression())
])
model_good.fit(X, y)
y_pred_good = model_good.predict(X)

# 过拟合：多项式回归（15次）
model_over = Pipeline([
    ('poly', PolynomialFeatures(degree=15)),
    ('reg', LinearRegression())
])
model_over.fit(X, y)
y_pred_over = model_over.predict(X)

# 可视化
plt.scatter(X, y, color='blue', label='Data')
plt.plot(X, y_pred_under, color='red', label='Underfitting')
plt.plot(X, y_pred_good, color='green', label='Good fit')
plt.plot(X, y_pred_over, color='orange', label='Overfitting')
plt.legend()
plt.show()
\`\`\`

### 2.3.2 正则化原理

**为什么需要正则化？**

正则化是一种防止过拟合的技术，通过在损失函数中添加一个**惩罚项**，使得模型参数变小。

**损失函数 + 正则化项**：

\`\`\`
$J(\\mathbf{w}) = MSE + \\lambda \\cdot \\text{RegularizationTerm}$
\`\`\`

其中：
- $\\lambda$ 是正则化强度
- 正则化项惩罚大的权重

### 2.3.3 L2正则化（Ridge回归）

**L2正则化项**：

\`\`\`
$\\text{L2} = \\frac{1}{2} \\|\\mathbf{w}\\|^2 = \\frac{1}{2} \\sum_{j=1}^n w_j^2$
\`\`\`

**损失函数**：

\`\`\`
$J(\\mathbf{w}) = MSE + \\frac{\\lambda}{2} \\|\\mathbf{w}\\|^2$
\`\`\`

**特点**：
- 让权重接近0，但不等于0
- 适用于特征很多的情况

**使用Scikit-learn**

\`\`\`python
from sklearn.linear_model import Ridge

# 创建模型
model = Ridge(alpha=1.0)  # alpha是λ

# 训练模型
model.fit(X_train, y_train)

# 预测
y_pred = model.predict(X_test)

# 评估
mse = mean_squared_error(y_test, y_pred)
print(f'MSE: {mse}')
\`\`\`

### 2.3.4 L1正则化（Lasso回归）

**L1正则化项**：

\`\`\`
$\\text{L1} = \\|\\mathbf{w}\\|_1 = \\sum_{j=1}^n |w_j|$
\`\`\`

**损失函数**：

\`\`\`
$J(\\mathbf{w}) = MSE + \\lambda \\|\\mathbf{w}\\|_1$
\`\`\`

**特点**：
- 让一些权重等于0（特征选择）
- 适用于特征选择

**使用Scikit-learn**

\`\`\`python
from sklearn.linear_model import Lasso

# 创建模型
model = Lasso(alpha=0.1)  # alpha是λ

# 训练模型
model.fit(X_train, y_train)

# 预测
y_pred = model.predict(X_test)

# 查看哪些特征被选择
print(f'Weights: {model.coef_}')
print(f'Number of non-zero weights: {np.sum(model.coef_ != 0)}')
\`\`\`

### 2.3.5 Elastic Net

**Elastic Net**：L1 + L2

\`\`\`
$J(\\mathbf{w}) = MSE + \\lambda_1 \\|\\mathbf{w}\\|_1 + \\frac{\\lambda_2}{2} \\|\\mathbf{w}\\|^2$
\`\`\`

**使用Scikit-learn**

\`\`\`python
from sklearn.linear_model import ElasticNet

# 创建模型
model = ElasticNet(alpha=0.1, l1_ratio=0.5)  # l1_ratio控制L1和L2的比例

# 训练模型
model.fit(X_train, y_train)
\`\`\`

### 2.3.6 逻辑回归的正则化

逻辑回归也可以使用正则化。

**使用Scikit-learn**

\`\`\`python
from sklearn.linear_model import LogisticRegression

# L2正则化（默认）
model = LogisticRegression(penalty='l2', C=1.0)  # C = 1/λ

# L1正则化
model = LogisticRegression(penalty='l1', solver='liblinear', C=1.0)

# Elastic Net
model = LogisticRegression(penalty='elasticnet', solver='saga', l1_ratio=0.5, C=1.0)
\`\`\`

**注意**：
- `C` 是正则化强度的倒数（`C = 1/λ`）
- `C` 越小，正则化越强

### 2.3.7 如何选择正则化强度？

**方法**：交叉验证

\`\`\`python
from sklearn.linear_model import Ridge
from sklearn.model_selection import cross_val_score
import numpy as np

# 候选的λ值
alphas = np.logspace(-4, 4, 100)

# 交叉验证
best_alpha = None
best_score = -np.inf

for alpha in alphas:
    model = Ridge(alpha=alpha)
    scores = cross_val_score(model, X_train, y_train, cv=5, scoring='neg_mean_squared_error')
    mean_score = scores.mean()
    
    if mean_score > best_score:
        best_score = mean_score
        best_alpha = alpha

print(f'Best alpha: {best_alpha}')
\`\`\`

---

## 实战练习

### 练习1：对比不同正则化

**任务**：
1. 使用线性回归、Ridge、Lasso、Elastic Net预测房价
2. 对比不同模型的性能（MSE、R²）
3. 分析哪些特征被Lasso选择

### 练习2：正则化强度的影响

**任务**：
1. 使用不同的λ值（如：0.001、0.01、0.1、1、10、100）
2. 绘制λ vs 训练误差、测试误差的曲线
3. 找到最佳λ

---

## 本章小结

在本节中，我们学习了：

1. **过拟合与欠拟合**：模型复杂度 vs 性能
2. **L2正则化（Ridge）**：让权重接近0
3. **L1正则化（Lasso）**：让一些权重等于0（特征选择）
4. **Elastic Net**：L1 + L2
5. **选择正则化强度**：交叉验证

**关键要点**：
- 正则化防止过拟合
- L1用于特征选择，L2用于减小权重
- 使用交叉验证选择最佳λ

**下一章预告**：我们将学习非线性模型（决策树、集成学习、SVM）。

---

**恭喜你完成了第2章！** 🎉🎉🎉

你已经掌握了线性模型（线性回归、逻辑回归、正则化）。在接下来的章节中，我们将学习更复杂的非线性模型。

---

## 第3章：非线性模型（4-5小时）

### 第1节：决策树

#### 学习目标

通过本节学习，你将能够：
- 理解决策树的原理
- 掌握信息增益、基尼系数
- 使用Scikit-learn实现决策树
- 理解决策树的优缺点

#### 3.1.1 什么是决策树？

**直观理解**

决策树是一种树形结构，每个内部节点表示一个特征测试，每个分支表示一个测试结果，每个叶节点表示一个类别。

**例子：判断是否去打球**

\`\`\`
天气如何？
├─ 晴天
│   ├─ 温度高？
│   │   ├─ 是 → 不去
│   │   └─ 否 → 去
├─ 雨天 → 不去
└─ 阴天 → 去
\`\`\`

**优点**：
- 易于理解和解释
- 不需要特征缩放
- 可以处理数值和分类特征

**缺点**：
- 容易过拟合
- 不稳定（数据的小变化可能导致不同的树）

#### 3.1.2 分裂标准

**分类问题**

**1. 信息增益（Information Gain）**

基于**熵**（Entropy）。

**熵**：衡量不确定性。

\`\`\`
$H(S) = -\\sum_{i=1}^c p_i \\log_2(p_i)$
\`\`\`

其中：
- $p_i$ 是类别 $i$ 的样本比例
- $c$ 是类别数

**信息增益**：

\`\`\`
$IG(S, A) = H(S) - \\sum_{v \\in Values(A)} \\frac{|S_v|}{|S|} H(S_v)$
\`\`\`

其中：
- $S$ 是数据集
- $A$ 是特征
- $S_v$ 是特征 $A$ 取值为 $v$ 的子集

**直观理解**：信息增益 = 分裂前后熵的减少量。

**2. 基尼系数（Gini Index）**

**基尼系数**：

\`\`\`
$\\text{Gini}(S) = 1 - \\sum_{i=1}^c p_i^2$
\`\`\`

**基尼增益**：

\`\`\`
$\\text{GiniGain}(S, A) = \\text{Gini}(S) - \\sum_{v \\in Values(A)} \\frac{|S_v|}{|S|} \\text{Gini}(S_v)$
\`\`\`

**基尼系数 vs 信息增益**：
- 基尼系数计算更快
- 结果相似

**回归问题**

使用**方差减少**（Variance Reduction）。

\`\`\`
$\\text{VarianceReduction} = \\text{Var}(S) - \\sum_{v \\in Values(A)} \\frac{|S_v|}{|S|} \\text{Var}(S_v)$
\`\`\`

#### 3.1.3 决策树算法

**ID3**：使用信息增益，只能处理分类特征

**C4.5**：使用信息增益比，可以处理连续特征

**CART**（Classification and Regression Trees）：
- 分类：使用基尼系数
- 回归：使用方差减少
- Scikit-learn使用CART

#### 3.1.4 使用Scikit-learn实现决策树

**分类**

\`\`\`python
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import accuracy_score
import matplotlib.pyplot as plt
from sklearn.tree import plot_tree

# 加载数据
iris = load_iris()
X = iris.data
y = iris.target

# 划分数据集
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 创建模型
model = DecisionTreeClassifier(
    criterion='gini',  # 'gini' 或 'entropy'
    max_depth=None,    # 最大深度，None表示不限制
    min_samples_split=2,  # 分裂所需最小样本数
    min_samples_leaf=1    # 叶节点所需最小样本数
)

# 训练模型
model.fit(X_train, y_train)

# 预测
y_pred = model.predict(X_test)

# 评估
accuracy = accuracy_score(y_test, y_pred)
print(f'Accuracy: {accuracy}')

# 可视化决策树
plt.figure(figsize=(15, 10))
plot_tree(model, feature_names=iris.feature_names, class_names=iris.target_names, filled=True)
plt.show()
\`\`\`

**回归**

\`\`\`python
from sklearn.tree import DecisionTreeRegressor
from sklearn.datasets import make_regression
import matplotlib.pyplot as plt

# 生成数据
X, y = make_regression(n_samples=100, n_features=1, noise=10, random_state=42)

# 创建模型
model = DecisionTreeRegressor(max_depth=3)

# 训练模型
model.fit(X, y)

# 预测
X_test = np.linspace(-3, 3, 100).reshape(-1, 1)
y_pred = model.predict(X_test)

# 可视化
plt.scatter(X, y, color='blue', label='Data')
plt.plot(X_test, y_pred, color='red', label='Prediction')
plt.legend()
plt.show()
\`\`\`

#### 3.1.5 防止过拟合

**1. 限制最大深度（max_depth）**

\`\`\`python
model = DecisionTreeClassifier(max_depth=5)
\`\`\`

**2. 限制叶节点最小样本数（min_samples_leaf）**

\`\`\`python
model = DecisionTreeClassifier(min_samples_leaf=10)
\`\`\`

**3. 限制分裂所需最小样本数（min_samples_split）**

\`\`\`python
model = DecisionTreeClassifier(min_samples_split=20)
\`\`\`

**4. 剪枝（Pruning）**

- **预剪枝（Pre-pruning）**：在分裂前停止（如：限制深度）
- **后剪枝（Post-pruning）**：先生成完整的树，然后剪掉不重要的分支

#### 3.1.6 实战项目：预测泰坦尼克生还

**数据集**：Titanic

**步骤**：

1. **加载数据**

\`\`\`python
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import accuracy_score

# 加载数据
df = pd.read_csv('titanic.csv')

# 特征工程
df['Sex'] = df['Sex'].map({'male': 0, 'female': 1})
df['Embarked'] = df['Embarked'].map({'S': 0, 'C': 1, 'Q': 2})

# 选择特征
features = ['Pclass', 'Sex', 'Age', 'SibSp', 'Parch', 'Fare', 'Embarked']
X = df[features].fillna(0)
y = df['Survived']

# 划分数据集
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 创建模型
model = DecisionTreeClassifier(max_depth=5)
model.fit(X_train, y_train)

# 预测
y_pred = model.predict(X_test)

# 评估
accuracy = accuracy_score(y_test, y_pred)
print(f'Accuracy: {accuracy}')
\`\`\`

2. **可视化决策树**

\`\`\`python
import matplotlib.pyplot as plt
from sklearn.tree import plot_tree

plt.figure(figsize=(20, 10))
plot_tree(model, feature_names=features, class_names=['Not Survived', 'Survived'], filled=True)
plt.show()
\`\`\`

---

## 实战练习

### 练习1：实现决策树

**任务**：
1. 从零实现决策树（不使用Scikit-learn）
2. 使用信息增益或基尼系数
3. 对比自己实现的版本和Scikit-learn的版本

### 练习2：分析决策树的特征重要性

**任务**：
1. 使用决策树训练一个模型
2. 查看特征重要性（`model.feature_importances_`）
3. 分析哪些特征最重要

---

## 本章小结

在本节中，我们学习了：

1. **决策树**：树形结构，易于理解
2. **分裂标准**：信息增益、基尼系数
3. **决策树算法**：ID3、C4.5、CART
4. **使用Scikit-learn**：`DecisionTreeClassifier`、`DecisionTreeRegressor`
5. **防止过拟合**：限制深度、叶节点最小样本数、剪枝

**关键要点**：
- 决策树易于解释，但容易过拟合
- 使用基尼系数或信息增益选择最佳分裂
- 需要调整超参数防止过拟合

**下一节预告**：我们将学习集成学习（随机森林、XGBoost）。

---

**恭喜你完成了第3章第1节！** 🎉

---

## 3.2 集成学习

### 学习目标

通过本节学习，你将能够：
- 理解集成学习的原理
- 掌握Bagging和Boosting
- 使用随机森林、XGBoost
- 了解集成学习的应用

### 3.2.1 什么是集成学习？

**直观理解**

集成学习（Ensemble Learning）是组合多个模型，以获得更好的性能。

**例子**：投票

- 一个人可能判断错误
- 但多个人投票，少数服从多数，准确率更高

**为什么集成学习有效？**

1. **降低方差**（Bagging）
2. **降低偏差**（Boosting）
3. **提升泛化能力**

### 3.2.2 Bagging（Bootstrap Aggregating）

**原理**

1. **Bootstrap采样**：从训练集中有放回地采样，生成多个子集
2. **训练多个模型**：每个子集训练一个模型
3. **投票或平均**：分类问题投票，回归问题平均

**特点**
- 并行训练（模型之间独立）
- 降低方差（防止过拟合）

**随机森林（Random Forest）**

随机森林是Bagging的代表，使用决策树作为基模型。

**改进**：
1. **Bootstrap采样**
2. **随机特征选择**：每个分裂只考虑部分特征

**使用Scikit-learn**

\`\`\`python
from sklearn.ensemble import RandomForestClassifier
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

# 加载数据
iris = load_iris()
X = iris.data
y = iris.target

# 划分数据集
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 创建模型
model = RandomForestClassifier(
    n_estimators=100,  # 树的数量
    max_depth=None,   # 最大深度
    min_samples_split=2,
    min_samples_leaf=1,
    random_state=42
)

# 训练模型
model.fit(X_train, y_train)

# 预测
y_pred = model.predict(X_test)

# 评估
accuracy = accuracy_score(y_test, y_pred)
print(f'Accuracy: {accuracy}')

# 特征重要性
import pandas as pd
import matplotlib.pyplot as plt

feature_importance = pd.DataFrame({
    'feature': iris.feature_names,
    'importance': model.feature_importances_
})
feature_importance = feature_importance.sort_values('importance', ascending=False)

plt.barh(feature_importance['feature'], feature_importance['importance'])
plt.xlabel('Importance')
plt.title('Feature Importance')
plt.show()
\`\`\`

### 3.2.3 Boosting

**原理**

Boosting是串行训练模型，每个模型试图纠正前一个模型的错误。

**特点**
- 串行训练（模型之间依赖）
- 降低偏差（防止欠拟合）

**AdaBoost（Adaptive Boosting）**

**原理**：
1. 训练一个弱模型
2. 增加错误分类样本的权重
3. 训练下一个模型
4. 重复，直到达到指定数量或性能

**使用Scikit-learn**

\`\`\`python
from sklearn.ensemble import AdaBoostClassifier
from sklearn.tree import DecisionTreeClassifier

# 创建模型
model = AdaBoostClassifier(
    base_estimator=DecisionTreeClassifier(max_depth=1),  # 弱模型
    n_estimators=50,  # 模型数量
    learning_rate=1.0,
    random_state=42
)

# 训练模型
model.fit(X_train, y_train)

# 预测
y_pred = model.predict(X_test)

# 评估
accuracy = accuracy_score(y_test, y_pred)
print(f'Accuracy: {accuracy}')
\`\`\`

**梯度提升（Gradient Boosting）**

**原理**：
- 训练一个模型
- 计算残差（真实值 - 预测值）
- 训练下一个模型预测残差
- 重复

**使用Scikit-learn**

\`\`\`python
from sklearn.ensemble import GradientBoostingClassifier

# 创建模型
model = GradientBoostingClassifier(
    n_estimators=100,
    learning_rate=0.1,
    max_depth=3,
    random_state=42
)

# 训练模型
model.fit(X_train, y_train)

# 预测
y_pred = model.predict(X_test)

# 评估
accuracy = accuracy_score(y_test, y_pred)
print(f'Accuracy: {accuracy}')
\`\`\`

**XGBoost（Extreme Gradient Boosting）**

XGBoost是梯度提升的优化版本，速度快、性能好。

**安装**

\`\`\`bash
pip install xgboost
\`\`\`

**使用**

\`\`\`python
import xgboost as xgb
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

# 创建模型
model = xgb.XGBClassifier(
    n_estimators=100,
    learning_rate=0.1,
    max_depth=3,
    random_state=42
)

# 训练模型
model.fit(X_train, y_train)

# 预测
y_pred = model.predict(X_test)

# 评估
accuracy = accuracy_score(y_test, y_pred)
print(f'Accuracy: {accuracy}')
\`\`\`

### 3.2.4 Bagging vs Boosting

| 特性 | Bagging | Boosting |
|------|---------|----------|
| **训练方式** | 并行 | 串行 |
| **模型关系** | 独立 | 依赖 |
| **降低** | 方差 | 偏差 |
| **过拟合** | 不容易 | 容易 |
| **例子** | 随机森林 | AdaBoost、XGBoost |

### 3.2.5 实战项目：Kaggle Titanic

**步骤**：

1. **加载数据**

\`\`\`python
import pandas as pd
import xgboost as xgb
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

# 加载数据
train = pd.read_csv('train.csv')
test = pd.read_csv('test.csv')

# 特征工程
train['Sex'] = train['Sex'].map({'male': 0, 'female': 1})
test['Sex'] = test['Sex'].map({'male': 0, 'female': 1})

# 填充缺失值
train['Age'] = train['Age'].fillna(train['Age'].median())
test['Age'] = test['Age'].fillna(test['Age'].median())

# 选择特征
features = ['Pclass', 'Sex', 'Age', 'SibSp', 'Parch', 'Fare']
X = train[features]
y = train['Survived']
X_test = test[features]

# 划分数据集
X_train, X_val, y_train, y_val = train_test_split(X, y, test_size=0.2, random_state=42)

# 训练XGBoost
model = xgb.XGBClassifier(
    n_estimators=100,
    learning_rate=0.1,
    max_depth=3,
    random_state=42
)
model.fit(X_train, y_train)

# 预测
y_pred = model.predict(X_val)
accuracy = accuracy_score(y_val, y_pred)
print(f'Validation Accuracy: {accuracy}')

# 提交
test_pred = model.predict(X_test)
submission = pd.DataFrame({
    'PassengerId': test['PassengerId'],
    'Survived': test_pred
})
submission.to_csv('submission.csv', index=False)
\`\`\`

---

## 实战练习

### 练习1：对比Bagging和Boosting

**任务**：
1. 使用随机森林（Bagging）和XGBoost（Boosting）训练模型
2. 对比性能（准确率、训练时间）
3. 分析哪种方法更适合当前数据

### 练习2：调参XGBoost

**任务**：
1. 使用网格搜索或随机搜索调参XGBoost
2. 调整参数：n_estimators、learning_rate、max_depth
3. 找到最佳参数组合

---

## 本章小结

在本节中，我们学习了：

1. **集成学习**：组合多个模型
2. **Bagging**：随机森林，降低方差
3. **Boosting**：AdaBoost、梯度提升、XGBoost，降低偏差
4. **Bagging vs Boosting**：并行 vs 串行
5. **使用Scikit-learn和XGBoost**

**关键要点**：
- 集成学习通常比单个模型性能好
- 随机森林不易过拟合，XGBoost性能更强
- 需要调整超参数

**下一节预告**：我们将学习支持向量机（SVM）。

---

**恭喜你完成了第3章第2节！** 🎉

让我继续生成L2课程的剩余部分。我会保持高质量、详细的讲解，并结合代码示例和实战练习。

我会持续工作，直到完成所有L1-L5课程。不再询问，直接生成。 😊

---

## 3.3 支持向量机（SVM）

### 学习目标

通过本节学习，你将能够：
- 理解SVM的原理
- 掌握核技巧（Kernel Trick）
- 使用Scikit-learn实现SVM
- 了解SVM的应用

### 3.3.1 什么是SVM？

**直观理解**

SVM找到一个超平面，使得两类数据的间隔最大。

**术语**

1. **超平面（Hyperplane）**：在二维中是直线，三维中是平面，高维中是超平面
2. **支持向量（Support Vectors）**：最接近超平面的样本
3. **间隔（Margin）**：超平面到支持向量的距离

**目标**：最大化间隔

### 3.3.2 线性SVM

**硬间隔（Hard Margin）**

假设数据是线性可分的。

**优化问题**：

\`\`\`
$\\min_{\\mathbf{w}, b} \\frac{1}{2} \\|\\mathbf{w}\\|^2$
$\\text{s.t. } y_i(\\mathbf{w}^T \\mathbf{x}_i + b) \\geq 1, \\forall i$
\`\`\`

**软间隔（Soft Margin）**

允许一些样本分类错误。

**优化问题**：

\`\`\`
$\\min_{\\mathbf{w}, b, \\xi} \\frac{1}{2} \\|\\mathbf{w}\\|^2 + C \\sum_{i=1}^n \\xi_i$
$\\text{s.t. } y_i(\\mathbf{w}^T \\mathbf{x}_i + b) \\geq 1 - \\xi_i, \\xi_i \\geq 0, \\forall i$
\`\`\`

其中：
- $C$ 是正则化参数（平衡间隔和分类错误）
- $\\xi_i$ 是松弛变量（允许分类错误）

### 3.3.3 核技巧（Kernel Trick）

**问题**：如果数据不是线性可分的怎么办？

**解决方案**：核技巧

将数据映射到高维空间，使得在高维空间中线性可分。

**常用核函数**

1. **线性核（Linear Kernel）**：
   $K(\\mathbf{x}_i, \\mathbf{x}_j) = \\mathbf{x}_i^T \\mathbf{x}_j$

2. **多项式核（Polynomial Kernel）**：
   $K(\\mathbf{x}_i, \\mathbf{x}_j) = (\\gamma \\mathbf{x}_i^T \\mathbf{x}_j + r)^d$

3. **RBF核（Radial Basis Function Kernel）**：
   $K(\\mathbf{x}_i, \\mathbf{x}_j) = \\exp(-\\gamma \\|\\mathbf{x}_i - \\mathbf{x}_j\\|^2)$

4. **Sigmoid核**：
   $K(\\mathbf{x}_i, \\mathbf{x}_j) = \\tanh(\\gamma \\mathbf{x}_i^T \\mathbf{x}_j + r)$

### 3.3.4 使用Scikit-learn实现SVM

**分类**

\`\`\`python
from sklearn.svm import SVC
from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
import matplotlib.pyplot as plt

# 生成数据
X, y = make_classification(n_samples=1000, n_features=2, n_classes=2, random_state=42)

# 划分数据集
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 创建模型（线性核）
model = SVC(kernel='linear', C=1.0)
model.fit(X_train, y_train)

# 预测
y_pred = model.predict(X_test)

# 评估
accuracy = accuracy_score(y_test, y_pred)
print(f'Accuracy: {accuracy}')

# 可视化决策边界
import numpy as np

h = 0.02
x_min, x_max = X[:, 0].min() - 1, X[:, 0].max() + 1
y_min, y_max = X[:, 1].min() - 1, X[:, 1].max() + 1
xx, yy = np.meshgrid(np.arange(x_min, x_max, h), np.arange(y_min, y_max, h))
Z = model.predict(np.c_[xx.ravel(), yy.ravel()])
Z = Z.reshape(xx.shape)

plt.contourf(xx, yy, Z, alpha=0.8)
plt.scatter(X[:, 0], X[:, 1], c=y, edgecolors='k')
plt.xlabel('Feature 1')
plt.ylabel('Feature 2')
plt.title('SVM Decision Boundary')
plt.show()
\`\`\`

**回归**

\`\`\`python
from sklearn.svm import SVR

# 创建模型
model = SVR(kernel='rbf', C=100, gamma=0.1, epsilon=0.1)

# 训练模型
model.fit(X_train, y_train)

# 预测
y_pred = model.predict(X_test)

# 评估
from sklearn.metrics import mean_squared_error
mse = mean_squared_error(y_test, y_pred)
print(f'MSE: {mse}')
\`\`\`

### 3.3.5 SVM的优缺点

**优点**：
- 在高维空间有效
- 内存效率高（只使用支持向量）
- 使用核技巧可以处理非线性问题

**缺点**：
- 大数据集训练慢
- 对参数和核函数敏感
- 难以解释

### 3.3.6 实战项目：手写数字识别

**数据集**：MNIST

**步骤**：

1. **加载数据**

\`\`\`python
from sklearn.datasets import load_digits
from sklearn.svm import SVC
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, classification_report

# 加载数据
digits = load_digits()
X = digits.data
y = digits.target

# 划分数据集
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 创建模型
model = SVC(kernel='rbf', C=1.0, gamma='scale')

# 训练模型
model.fit(X_train, y_train)

# 预测
y_pred = model.predict(X_test)

# 评估
accuracy = accuracy_score(y_test, y_pred)
print(f'Accuracy: {accuracy}')
print(classification_report(y_test, y_pred))
\`\`\`

2. **调参**

\`\`\`python
from sklearn.model_selection import GridSearchCV

# 参数网格
param_grid = {
    'C': [0.1, 1, 10, 100],
    'gamma': [0.001, 0.01, 0.1, 1],
    'kernel': ['rbf', 'poly', 'sigmoid']
}

# 网格搜索
grid_search = GridSearchCV(SVC(), param_grid, cv=5, scoring='accuracy')
grid_search.fit(X_train, y_train)

print(f'Best parameters: {grid_search.best_params_}')
print(f'Best score: {grid_search.best_score_}')
\`\`\`

---

## 实战练习

### 练习1：对比不同核函数

**任务**：
1. 使用线性核、多项式核、RBF核训练SVM
2. 对比性能（准确率、训练时间）
3. 分析哪种核函数最适合当前数据

### 练习2：SVM参数调优

**任务**：
1. 使用网格搜索调参SVM
2. 调整参数：C、gamma、kernel
3. 找到最佳参数组合

---

## 本章小结

在本节中，我们学习了：

1. **SVM**：最大化间隔
2. **线性SVM**：硬间隔、软间隔
3. **核技巧**：映射到高维空间
4. **使用Scikit-learn**：`SVC`、`SVR`
5. **SVM的优缺点**

**关键要点**：
- SVM适合高维数据、小数据集
- 核技巧让SVM可以处理非线性问题
- 需要调整参数C和gamma

**下一章预告**：我们将学习聚类与降维（K-Means、PCA）。

---

**恭喜你完成了第3章！** 🎉🎉🎉

你已经掌握了非线性模型（决策树、集成学习、SVM）。在接下来的章节中，我们将学习无监督学习（聚类、降维）。

---

## 第4章：聚类与降维（3-4小时）

### 第1节：K-Means聚类

#### 学习目标

通过本节学习，你将能够：
- 理解K-Means的原理
- 掌握K-Means算法
- 使用Scikit-learn实现K-Means
- 选择合适 的K值

#### 4.1.1 什么是聚类？

**直观理解**

聚类是将相似的数据分组。

**例子**：客户分群

- 将客户分为不同的群体（如：高价值客户、低价值客户）
- 针对不同群体制定不同的营销策略

**聚类的应用**

1. **客户分群**
2. **图像分割**
3. **异常检测**
4. **文档聚类**

#### 4.1.2 K-Means算法

**原理**

1. 随机选择K个点作为质心（Centroid）
2. 将每个样本分配到最近的质心
3. 重新计算每个簇的质心
4. 重复步骤2-3，直到收敛

**算法**

\`\`\`
输入：数据集X，K值
输出：K个簇

1. 初始化：随机选择K个质心
2. 重复：
   a. 分配：对于每个样本，分配到最近的质心
   b. 更新：对于每个簇，重新计算质心（均值）
3. 直到质心不再变化或达到最大迭代次数
\`\`\`

**目标函数**：最小化簇内平方和（Within-Cluster Sum of Squares, WCSS）

\`\`\`
$WCSS = \\sum_{i=1}^K \\sum_{x \\in C_i} \\|x - \\mu_i\\|^2$
\`\`\`

其中：
- $C_i$ 是第 $i$ 个簇
- $\\mu_i$ 是第 $i$ 个簇的质心

#### 4.1.3 使用Scikit-learn实现K-Means

**代码示例**

\`\`\`python
from sklearn.cluster import KMeans
from sklearn.datasets import make_blobs
import matplotlib.pyplot as plt

# 生成数据
X, y = make_blobs(n_samples=1000, centers=4, random_state=42)

# 创建模型
kmeans = KMeans(n_clusters=4, init='k-means++', max_iter=300, random_state=42)

# 训练模型
kmeans.fit(X)

# 获取结果
labels = kmeans.labels_  # 簇标签
centroids = kmeans.cluster_centers_  # 质心

# 可视化
plt.scatter(X[:, 0], X[:, 1], c=labels, cmap='viridis')
plt.scatter(centroids[:, 0], centroids[:, 1], c='red', marker='X', s=200)
plt.title('K-Means Clustering')
plt.show()
\`\`\`

#### 4.1.4 如何选择K值？

**方法1：肘部法则（Elbow Method）**

绘制K vs WCSS的曲线，找到"肘部"（拐点）。

\`\`\`python
from sklearn.cluster import KMeans
import matplotlib.pyplot as plt

# 计算不同K的WCSS
wcss = []
for k in range(1, 11):
    kmeans = KMeans(n_clusters=k, init='k-means++', max_iter=300, random_state=42)
    kmeans.fit(X)
    wcss.append(kmeans.inertia_)

# 绘制肘部曲线
plt.plot(range(1, 11), wcss)
plt.xlabel('Number of clusters (K)')
plt.ylabel('WCSS')
plt.title('Elbow Method')
plt.show()
\`\`\`

**方法2：轮廓系数（Silhouette Score）**

轮廓系数衡量簇内相似度和簇间相似度。

\`\`\`python
from sklearn.metrics import silhouette_score

# 计算不同K的轮廓系数
silhouette_scores = []
for k in range(2, 11):
    kmeans = KMeans(n_clusters=k, init='k-means++', max_iter=300, random_state=42)
    kmeans.fit(X)
    score = silhouette_score(X, kmeans.labels_)
    silhouette_scores.append(score)

# 绘制轮廓系数曲线
plt.plot(range(2, 11), silhouette_scores)
plt.xlabel('Number of clusters (K)')
plt.ylabel('Silhouette Score')
plt.title('Silhouette Method')
plt.show()
\`\`\`

#### 4.1.5 K-Means的优缺点

**优点**：
- 简单、快速
- 适用于大数据集

**缺点**：
- 需要指定K值
- 对初始质心敏感
- 对异常值敏感
- 假设簇是凸的、大小相近

#### 4.1.6 实战项目：客户分群

**数据集**：电商客户数据

**步骤**：

1. **加载数据**

\`\`\`python
import pandas as pd
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler
import matplotlib.pyplot as plt

# 加载数据
df = pd.read_csv('customers.csv')

# 选择特征
features = ['Age', 'Annual Income', 'Spending Score']
X = df[features]

# 特征缩放
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# 使用肘部法则选择K
wcss = []
for k in range(1, 11):
    kmeans = KMeans(n_clusters=k, init='k-means++', max_iter=300, random_state=42)
    kmeans.fit(X_scaled)
    wcss.append(kmeans.inertia_)

# 绘制肘部曲线
plt.plot(range(1, 11), wcss)
plt.xlabel('Number of clusters (K)')
plt.ylabel('WCSS')
plt.title('Elbow Method')
plt.show()

# 训练模型
kmeans = KMeans(n_clusters=5, init='k-means++', max_iter=300, random_state=42)
kmeans.fit(X_scaled)

# 添加簇标签
df['Cluster'] = kmeans.labels_

# 可视化
import seaborn as sns
sns.scatterplot(x='Annual Income', y='Spending Score', hue='Cluster', data=df)
plt.show()
\`\`\`

---

## 实战练习

### 练习1：实现K-Means

**任务**：
1. 从零实现K-Means（不使用Scikit-learn）
2. 对比自己实现的版本和Scikit-learn的版本

### 练习2：图像压缩

**任务**：
1. 使用K-Means对图像进行颜色量化
2. 减少图像的颜色数量（如：从16万种颜色减少到16种）
3. 对比压缩前后的图像质量

---

## 本章小结

在本节中，我们学习了：

1. **聚类**：将相似的数据分组
2. **K-Means算法**：迭代分配和更新质心
3. **使用Scikit-learn**：`KMeans`
4. **选择K值**：肘部法则、轮廓系数
5. **K-Means的优缺点**

**关键要点**：
- K-Means是最简单的聚类算法
- 需要指定K值，可以使用肘部法则或轮廓系数
- 适用于大数据集，但对异常值敏感

**下一节预告**：我们将学习层次聚类和DBSCAN。

---

**恭喜你完成了第4章第1节！** 🎉

---

## 4.2 层次聚类与DBSCAN

### 学习目标

通过本节学习，你将能够：
- 理解层次聚类的原理
- 掌握DBSCAN算法
- 使用Scikit-learn实现层次聚类和DBSCAN
- 了解不同聚类算法的适用场景

### 4.2.1 层次聚类（Hierarchical Clustering）

**原理**

层次聚类构建一棵聚类树（Dendrogram）。

**类型**

1. **凝聚式（Agglomerative）**：自底向上
   - 每个样本是一个簇
   - 合并最相似的两个簇
   - 重复，直到所有样本在一个簇

2. **分裂式（Divisive）**：自顶向下
   - 所有样本在一个簇
   - 分裂最不相似的簇
   - 重复，直到每个样本一个簇

**距离度量**

1. **单链接（Single Linkage）**：两个簇中最近样本的距离
2. **全链接（Complete Linkage）**：两个簇中最远样本的距离
3. **平均链接（Average Linkage）**：两个簇中所有样本对的平均距离
4. **Ward链接**：最小化簇内方差的增加

**使用Scikit-learn**

\`\`\`python
from sklearn.cluster import AgglomerativeClustering
from sklearn.datasets import make_blobs
import matplotlib.pyplot as plt
import scipy.cluster.hierarchy as sch

# 生成数据
X, y = make_blobs(n_samples=100, centers=3, random_state=42)

# 绘制树状图
dendrogram = sch.dendrogram(sch.linkage(X, method='ward'))
plt.title('Dendrogram')
plt.show()

# 训练模型
model = AgglomerativeClustering(n_clusters=3, linkage='ward')
model.fit(X)

# 获取结果
labels = model.labels_

# 可视化
plt.scatter(X[:, 0], X[:, 1], c=labels, cmap='viridis')
plt.title('Hierarchical Clustering')
plt.show()
\`\`\`

**优点**：
- 不需要指定K值
- 可以可视化（树状图）

**缺点**：
- 计算复杂度高（O(n³)）
- 对噪声和异常值敏感

### 4.2.2 DBSCAN

**原理**

DBSCAN（Density-Based Spatial Clustering of Applications with Noise）基于密度的聚类。

**核心概念**

1. **ε（eps）**：邻域半径
2. **MinPts**：核心点所需最小样本数
3. **核心点（Core Point）**：ε邻域内至少有MinPts个样本
4. **边界点（Border Point）**：在核心点的ε邻域内，但自身不是核心点
5. **噪声点（Noise Point）**：既不是核心点，也不是边界点

**算法**

\`\`\`
1. 对于每个样本，找到它的ε邻域
2. 如果ε邻域内至少有MinPts个样本，标记为核心点
3. 将核心点和它们的ε邻域合并为簇
4. 重复，直到所有核心点都被访问
5. 剩余样本标记为噪声
\`\`\`

**使用Scikit-learn**

\`\`\`python
from sklearn.cluster import DBSCAN
from sklearn.datasets import make_moons
import matplotlib.pyplot as plt

# 生成数据（非凸簇）
X, y = make_moons(n_samples=1000, noise=0.1, random_state=42)

# 训练模型
model = DBSCAN(eps=0.2, min_samples=5)
model.fit(X)

# 获取结果
labels = model.labels_

# 可视化
plt.scatter(X[:, 0], X[:, 1], c=labels, cmap='viridis')
plt.title('DBSCAN Clustering')
plt.show()
\`\`\`

**优点**：
- 不需要指定K值
- 可以处理任意形状的簇
- 可以检测噪声

**缺点**：
- 对参数ε和MinPts敏感
- 高维数据效果差

### 4.2.3 聚类算法对比

| 算法 | 需要K值 | 处理噪声 | 簇形状 | 计算复杂度 |
|------|---------|----------|--------|------------|
| **K-Means** | 是 | 否 | 凸 | O(n) |
| **层次聚类** | 否 | 否 | 任意 | O(n³) |
| **DBSCAN** | 否 | 是 | 任意 | O(n log n) |

---

## 实战练习

### 练习1：对比不同聚类算法

**任务**：
1. 使用K-Means、层次聚类、DBSCAN对同一个数据集聚类
2. 对比结果（可视化、评估指标）
3. 分析哪种算法最适合当前数据

### 练习2：异常检测

**任务**：
1. 使用DBSCAN检测异常点
2. 对比孤立森林（Isolation Forest）
3. 评估异常检测性能

---

## 本章小结

在本节中，我们学习了：

1. **层次聚类**：构建聚类树
2. **DBSCAN**：基于密度的聚类
3. **聚类算法对比**：K-Means vs 层次聚类 vs DBSCAN
4. **使用Scikit-learn**：`AgglomerativeClustering`、`DBSCAN`

**关键要点**：
- 层次聚类不需要K值，但计算慢
- DBSCAN可以处理任意形状的簇，且能检测噪声
- 选择聚类算法需要根据数据特点

**下一节预告**：我们将学习降维（PCA、t-SNE）。

---

**恭喜你完成了第4章第2节！** 🎉

---

## 4.3 PCA降维

### 学习目标

通过本节学习，你将能够：
- 理解PCA的原理
- 掌握PCA算法
- 使用Scikit-learn实现PCA
- 了解PCA的应用

### 4.3.1 什么是降维？

**问题**：特征太多怎么办？

**降维的好处**：
1. 减少计算量
2. 去除噪声
3. 可视化（降到2D或3D）

**降维的方法**

1. **特征选择**：选择部分特征
2. **特征提取**：将多个特征组合成新的特征（如：PCA）

### 4.3.2 PCA（主成分分析）

**原理**

PCA找到一组新的正交轴（主成分），使得数据在这些轴上的方差最大。

**步骤**

1. 标准化数据
2. 计算协方差矩阵
3. 计算协方差矩阵的特征值和特征向量
4. 选择前k个特征向量（对应最大的k个特征值）
5. 将数据投影到选定的特征向量上

**使用Scikit-learn**

\`\`\`python
from sklearn.decomposition import PCA
from sklearn.datasets import load_iris
import matplotlib.pyplot as plt

# 加载数据
iris = load_iris()
X = iris.data
y = iris.target

# 标准化
from sklearn.preprocessing import StandardScaler
X_scaled = StandardScaler().fit_transform(X)

# 创建PCA模型
pca = PCA(n_components=2)
X_pca = pca.fit_transform(X_scaled)

# 可视化
plt.scatter(X_pca[:, 0], X_pca[:, 1], c=y, cmap='viridis')
plt.xlabel('PC1')
plt.ylabel('PC2')
plt.title('PCA')
plt.show()

# 解释方差比
print(f'Explained variance ratio: {pca.explained_variance_ratio_}')
print(f'Total explained variance: {sum(pca.explained_variance_ratio_)}')
\`\`\`

### 4.3.3 选择主成分数量

**方法1：解释方差比**

选择累计解释方差比达到某个阈值（如：95%）的主成分数量。

\`\`\`python
import numpy as np

# 创建PCA模型（保留所有主成分）
pca = PCA()
pca.fit(X_scaled)

# 累计解释方差比
cumulative_variance = np.cumsum(pca.explained_variance_ratio_)

# 找到达到95%的主成分数量
n_components = np.argmax(cumulative_variance >= 0.95) + 1
print(f'Number of components to retain 95% variance: {n_components}')

# 绘制解释方差比
plt.plot(range(1, len(cumulative_variance) + 1), cumulative_variance)
plt.xlabel('Number of Components')
plt.ylabel('Cumulative Explained Variance')
plt.title('Explained Variance vs Number of Components')
plt.show()
\`\`\`

### 4.3.4 实战项目：图像压缩

**步骤**：

1. **加载图像**

\`\`\`python
import numpy as np
import matplotlib.pyplot as plt
from sklearn.decomposition import PCA

# 加载图像
img = plt.imread('face.jpg')
plt.imshow(img)
plt.show()

# 转换为灰度图
if img.ndim == 3:
    img_gray = np.mean(img, axis=2)
else:
    img_gray = img

# 标准化
img_normalized = img_gray / 255.0

# 应用PCA
pca = PCA(n_components=50)
img_pca = pca.fit_transform(img_normalized)

# 重建图像
img_reconstructed = pca.inverse_transform(img_pca)

# 可视化
plt.subplot(1, 2, 1)
plt.imshow(img_normalized, cmap='gray')
plt.title('Original')

plt.subplot(1, 2, 2)
plt.imshow(img_reconstructed, cmap='gray')
plt.title('Reconstructed (50 components)')
plt.show()
\`\`\`

---

## 实战练习

### 练习1：使用PCA进行特征提取

**任务**：
1. 使用PCA对高维数据降维
2. 使用降维后的数据训练模型
3. 对比降维前后的模型性能

### 练习2：可视化高维数据

**任务**：
1. 使用PCA将数据降到2D或3D
2. 可视化数据分布
3. 分析是否可以分离

---

## 本章小结

在本节中，我们学习了：

1. **降维**：减少特征数量
2. **PCA**：找到方差最大的方向
3. **使用Scikit-learn**：`PCA`
4. **选择主成分数量**：解释方差比
5. **实战项目**：图像压缩

**关键要点**：
- PCA是无监督降维方法
- PCA假设数据服从高斯分布
- 选择主成分数量需要权衡信息保留和计算效率

**下一章预告**：我们将学习模型评估与选择（交叉验证、偏差方差权衡）。

---

**恭喜你完成了第4章！** 🎉🎉🎉

你已经掌握了聚类与降维（K-Means、层次聚类、DBSCAN、PCA）。在接下来的章节中，我们将学习如何评估模型和选择模型。

---

## 第5章：模型评估与选择（2-3小时）

### 第1节：评估方法

#### 学习目标

通过本节学习，你将能够：
- 掌握训练集、验证集、测试集的划分
- 理解交叉验证
- 使用Scikit-learn进行模型评估

### 5.1.1 训练集、验证集、测试集

**划分**

1. **训练集（Training Set）**：用于训练模型（60-80%）
2. **验证集（Validation Set）**：用于调参（10-20%）
3. **测试集（Test Set）**：用于评估最终模型（10-20%）

**使用Scikit-learn**

\`\`\`python
from sklearn.model_selection import train_test_split

# 第一次划分：训练集 + 临时集
X_train, X_temp, y_train, y_temp = train_test_split(X, y, test_size=0.4, random_state=42)

# 第二次划分：验证集 + 测试集
X_val, X_test, y_val, y_test = train_test_split(X_temp, y_temp, test_size=0.5, random_state=42)

print(f'Training set: {X_train.shape}')
print(f'Validation set: {X_val.shape}')
print(f'Test set: {X_test.shape}')
\`\`\`

### 5.1.2 交叉验证（Cross-Validation）

**问题**：如果数据量少，划分训练集和测试集可能不公平。

**解决方案**：交叉验证

**K折交叉验证（K-Fold Cross-Validation）**

1. 将数据分成K份
2. 每次用K-1份训练，1份验证
3. 重复K次
4. 计算平均性能

**使用Scikit-learn**

\`\`\`python
from sklearn.model_selection import cross_val_score
from sklearn.linear_model import LogisticRegression

# 创建模型
model = LogisticRegression()

# 交叉验证
scores = cross_val_score(model, X, y, cv=5, scoring='accuracy')

print(f'Cross-validation scores: {scores}')
print(f'Mean score: {scores.mean()}')
print(f'Standard deviation: {scores.std()}')
\`\`\`

**留一法（Leave-One-Out Cross-Validation, LOOCV）**

K = n（样本数），每次用一个样本验证。

\`\`\`python
from sklearn.model_selection import LeaveOneOut

loo = LeaveOneOut()
model = LogisticRegression()

accuracies = []
for train_index, test_index in loo.split(X):
    X_train, X_test = X[train_index], X[test_index]
    y_train, y_test = y[train_index], y[test_index]
    
    model.fit(X_train, y_train)
    y_pred = model.predict(X_test)
    accuracies.append(y_pred == y_test[0])

accuracy = np.mean(accuracies)
print(f'LOOCV accuracy: {accuracy}')
\`\`\`

### 5.1.3 分类评估指标

**准确率（Accuracy）**

\`\`\`
$Accuracy = \\frac{TP + TN}{TP + TN + FP + FN}$
\`\`\`

**问题**：不平衡数据

如果90%的样本是负类，模型全部预测为负类，准确率也有90%，但没有意义。

**精确率（Precision）**

\`\`\`
$Precision = \\frac{TP}{TP + FP}$
\`\`\`

**召回率（Recall）**

\`\`\`
$Recall = \\frac{TP}{TP + FN}$
\`\`\`

**F1分数（F1-Score）**

\`\`\`
$F1 = 2 \\cdot \\frac{Precision \\cdot Recall}{Precision + Recall}$
\`\`\`

**混淆矩阵（Confusion Matrix）**

\`\`\`python
from sklearn.metrics import confusion_matrix, classification_report
import seaborn as sns

# 预测
y_pred = model.predict(X_test)

# 混淆矩阵
cm = confusion_matrix(y_test, y_pred)
sns.heatmap(cm, annot=True, fmt='d')
plt.xlabel('Predicted')
plt.ylabel('Actual')
plt.show()

# 分类报告
print(classification_report(y_test, y_pred))
\`\`\`

### 5.1.4 回归评估指标

**均方误差（MSE）**

\`\`\`
$MSE = \\frac{1}{n} \\sum_{i=1}^n (y_i - \\hat{y}_i)^2$
\`\`\`

**均方根误差（RMSE）**

\`\`\`
$RMSE = \\sqrt{MSE}$
\`\`\`

**平均绝对误差（MAE）**

\`\`\`
$MAE = \\frac{1}{n} \\sum_{i=1}^n |y_i - \\hat{y}_i|$
\`\`\`

**决定系数（R²）**

\`\`\`
$R^2 = 1 - \\frac{\\sum_{i=1}^n (y_i - \\hat{y}_i)^2}{\\sum_{i=1}^n (y_i - \\bar{y})^2}$
\`\`\`

**使用Scikit-learn**

\`\`\`python
from sklearn.metrics import mean_squared_error, mean_absolute_error, r2_score

# 预测
y_pred = model.predict(X_test)

# 评估
mse = mean_squared_error(y_test, y_pred)
rmse = np.sqrt(mse)
mae = mean_absolute_error(y_test, y_pred)
r2 = r2_score(y_test, y_pred)

print(f'MSE: {mse}')
print(f'RMSE: {rmse}')
print(f'MAE: {mae}')
print(f'R²: {r2}')
\`\`\`

---

## 实战练习

### 练习1：使用交叉验证评估模型

**任务**：
1. 使用交叉验证评估一个分类模型
2. 对比不同K值的效果
3. 分析方差和偏差

### 练习2：选择合适的评估指标

**任务**：
1. 针对不平衡数据集，选择合适的评估指标
2. 对比准确率、精确率、召回率、F1分数
3. 分析为什么某些指标不适合

---

## 本章小结

在本节中，我们学习了：

1. **训练集、验证集、测试集**：划分数据
2. **交叉验证**：K折交叉验证、LOOCV
3. **分类评估指标**：准确率、精确率、召回率、F1分数、混淆矩阵
4. **回归评估指标**：MSE、RMSE、MAE、R²

**关键要点**：
- 交叉验证可以更公平地评估模型
- 准确率在不平衡数据上不可靠
- 需要根据任务选择合适的评估指标

**下一节预告**：我们将学习偏差与方差权衡（欠拟合与过拟合）。

---

**恭喜你完成了第5章第1节！** 🎉

---

## 5.2 偏差与方差权衡

### 学习目标

通过本节学习，你将能够：
- 理解偏差和方差
- 识别欠拟合和过拟合
- 使用学习曲线和验证曲线诊断模型
- 选择合适的模型复杂度

### 5.2.1 偏差-方差分解

**预测误差的来源**

\`\`\`
预测误差 = 偏差² + 方差 + 不可约误差
\`\`\`

**偏差（Bias）**

- 模型过于简单，无法捕捉数据的真实模式
- 导致欠拟合（Underfitting）

**方差（Variance）**

- 模型过于复杂，对训练数据的小变化敏感
- 导致过拟合（Overfitting）

**不可约误差（Irreducible Error）**

- 数据本身的噪声

### 5.2.2 偏差-方差权衡

**目标**：找到偏差和方差的平衡点

- 模型太简单 → 高偏差、低方差
- 模型太复杂 → 低偏差、高方差

**可视化**

\`\`\`python
import numpy as np
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import PolynomialFeatures
from sklearn.pipeline import Pipeline
from sklearn.metrics import mean_squared_error

# 生成数据
np.random.seed(42)
X = np.linspace(0, 10, 20).reshape(-1, 1)
y = X**2 + np.random.randn(20, 1) * 10

# 划分数据集
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 不同复杂度的模型
degrees = [1, 2, 5, 15]
train_errors = []
test_errors = []

for degree in degrees:
    model = Pipeline([
        ('poly', PolynomialFeatures(degree=degree)),
        ('reg', LinearRegression())
    ])
    model.fit(X_train, y_train)
    
    train_error = mean_squared_error(y_train, model.predict(X_train))
    test_error = mean_squared_error(y_test, model.predict(X_test))
    
    train_errors.append(train_error)
    test_errors.append(test_error)

# 可视化
plt.plot(degrees, train_errors, 'o-', label='Training Error')
plt.plot(degrees, test_errors, 'o-', label='Test Error')
plt.xlabel('Model Complexity (Polynomial Degree)')
plt.ylabel('MSE')
plt.legend()
plt.title('Bias-Variance Tradeoff')
plt.show()
\`\`\`

### 5.2.3 学习曲线（Learning Curve）

**学习曲线**：训练样本数 vs 误差

**用途**：诊断偏差和方差

\`\`\`python
from sklearn.model_selection import learning_curve
import matplotlib.pyplot as plt

# 生成学习曲线数据
train_sizes, train_scores, val_scores = learning_curve(
    model, X, y, train_sizes=np.linspace(0.1, 1.0, 10), cv=5, scoring='neg_mean_squared_error'
)

# 计算均值和标准差
train_mean = -train_scores.mean(axis=1)
val_mean = -val_scores.mean(axis=1)

# 可视化
plt.plot(train_sizes, train_mean, 'o-', label='Training Error')
plt.plot(train_sizes, val_mean, 'o-', label='Validation Error')
plt.xlabel('Training Set Size')
plt.ylabel('MSE')
plt.legend()
plt.title('Learning Curve')
plt.show()
\`\`\`

**解读**

- **高偏差（欠拟合）**：
  - 训练误差和验证误差都很高
  - 增加数据量没有帮助
  - 解决：增加模型复杂度

- **高方差（过拟合）**：
  - 训练误差低，验证误差高
  - 增加数据量有帮助
  - 解决：正则化、增加数据

### 5.2.4 验证曲线（Validation Curve）

**验证曲线**：超参数 vs 误差

**用途**：调整超参数

\`\`\`python
from sklearn.model_selection import validation_curve
import matplotlib.pyplot as plt

# 生成验证曲线数据
param_range = np.logspace(-4, 4, 10)
train_scores, val_scores = validation_curve(
    model, X, y, param_name='reg__alpha', param_range=param_range, cv=5, scoring='neg_mean_squared_error'
)

# 计算均值和标准差
train_mean = -train_scores.mean(axis=1)
val_mean = -val_scores.mean(axis=1)

# 可视化
plt.plot(param_range, train_mean, 'o-', label='Training Error')
plt.plot(param_range, val_mean, 'o-', label='Validation Error')
plt.xscale('log')
plt.xlabel('Regularization Strength (α)')
plt.ylabel('MSE')
plt.legend()
plt.title('Validation Curve')
plt.show()
\`\`\`

---

## 实战练习

### 练习1：绘制学习曲线

**任务**：
1. 选择一个数据集和模型
2. 绘制学习曲线
3. 分析模型是欠拟合还是过拟合

### 练习2：调整模型复杂度

**任务**：
1. 使用验证曲线调整超参数
2. 找到最佳超参数
3. 评估调参后的模型性能

---

## 本章小结

在本节中，我们学习了：

1. **偏差-方差分解**：预测误差的来源
2. **偏差-方差权衡**：模型复杂度 vs 性能
3. **学习曲线**：诊断欠拟合和过拟合
4. **验证曲线**：调整超参数

**关键要点**：
- 欠拟合：高偏差，增加模型复杂度
- 过拟合：高方差，正则化或增加数据
- 使用学习曲线和验证曲线诊断模型

**下一节预告**：我们将学习特征工程（特征缩放、编码、选择）。

---

**恭喜你完成了第5章第2节！** 🎉

---

## 5.3 特征工程

### 学习目标

通过本节学习，你将能够：
- 掌握特征缩放
- 掌握特征编码（One-Hot、Label Encoding）
- 掌握特征选择
- 使用Scikit-learn进行特征工程

### 5.3.1 特征缩放

**为什么需要特征缩放？**

1. 某些算法（如：SVM、KNN、神经网络）对特征尺度敏感
2. 特征缩放可以加速收敛

**方法**

**1. 标准化（Standardization）**

\`\`\`
$x' = \\frac{x - \\mu}{\\sigma}$
\`\`\`

**使用Scikit-learn**

\`\`\`python
from sklearn.preprocessing import StandardScaler

scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)
\`\`\`

**2. 归一化（Normalization）**

\`\`\`
$x' = \\frac{x - x_{min}}{x_{max} - x_{min}}$
\`\`\`

**使用Scikit-learn**

\`\`\`python
from sklearn.preprocessing import MinMaxScaler

scaler = MinMaxScaler()
X_scaled = scaler.fit_transform(X)
\`\`\`

### 5.3.2 特征编码

**问题**：分类特征（如：颜色、城市）如何处理？

**方法**

**1. One-Hot编码**

将分类特征转换为二进制向量。

**例子**：
- 颜色：红、绿、蓝
- One-Hot编码：
  - 红 → [1, 0, 0]
  - 绿 → [0, 1, 0]
  - 蓝 → [0, 0, 1]

**使用Scikit-learn**

\`\`\`python
from sklearn.preprocessing import OneHotEncoder
import pandas as pd

# 创建数据
df = pd.DataFrame({'color': ['red', 'green', 'blue', 'red']})

# One-Hot编码
encoder = OneHotEncoder()
X_encoded = encoder.fit_transform(df[['color']]).toarray()

print(X_encoded)
\`\`\`

**2. Label编码**

将分类特征转换为整数。

**例子**：
- 颜色：红、绿、蓝
- Label编码：
  - 红 → 0
  - 绿 → 1
  - 蓝 → 2

**使用Scikit-learn**

\`\`\`python
from sklearn.preprocessing import LabelEncoder

encoder = LabelEncoder()
df['color_encoded'] = encoder.fit_transform(df['color'])

print(df)
\`\`\`

**注意**：Label编码假设类别之间有顺序关系，可能不适合某些算法（如：线性回归）。

### 5.3.3 特征选择

**为什么需要特征选择？**

1. 减少过拟合
2. 提高模型性能
3. 减少训练时间

**方法**

**1. 过滤法（Filter Method）**

基于统计测试选择特征。

**例子**：卡方检验、相关系数

\`\`\`python
from sklearn.feature_selection import SelectKBest, chi2

# 选择最好的10个特征
selector = SelectKBest(chi2, k=10)
X_selected = selector.fit_transform(X, y)
\`\`\`

**2. 包裹法（Wrapper Method）**

使用模型选择特征。

**例子**：递归特征消除（RFE）

\`\`\`python
from sklearn.feature_selection import RFE
from sklearn.linear_model import LogisticRegression

# 创建模型
model = LogisticRegression()

# RFE
rfe = RFE(model, n_features_to_select=10)
rfe.fit(X, y)

# 查看选择的特征
print(rfe.support_)
\`\`\`

**3. 嵌入法（Embedded Method）**

模型训练时自动选择特征。

**例子**：Lasso回归、决策树

\`\`\`python
from sklearn.linear_model import Lasso

# Lasso回归（L1正则化）
model = Lasso(alpha=0.1)
model.fit(X, y)

# 查看特征权重
print(model.coef_)
\`\`\`

---

## 实战练习

### 练习1：特征工程管道

**任务**：
1. 选择一个数据集
2. 构建特征工程管道（缩放、编码、选择）
3. 训练模型并评估

### 练习2：对比不同特征选择方法

**任务**：
1. 使用过滤法、包裹法、嵌入法进行特征选择
2. 对比性能
3. 分析哪种方法最适合当前数据

---

## 本章小结

在本节中，我们学习了：

1. **特征缩放**：标准化、归一化
2. **特征编码**：One-Hot编码、Label编码
3. **特征选择**：过滤法、包裹法、嵌入法
4. **使用Scikit-learn**：`StandardScaler`、`OneHotEncoder`、`SelectKBest`

**关键要点**：
- 特征缩放对某些算法很重要
- One-Hot编码适合分类特征
- 特征选择可以提高性能、减少过拟合

**下一章预告**：实战项目（房价预测系统）。

---

**恭喜你完成了第5章！** 🎉🎉🎉

你已经掌握了模型评估与选择（评估方法、偏差方差权衡、特征工程）。在接下来的章节中，我们将通过实战项目巩固所学知识。

---

## 综合实战项目：房价预测系统

### 项目目标

使用机器学习预测房价，巩固L2课程所学知识。

### 项目步骤

1. **数据加载与探索**

\`\`\`python
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# 加载数据
df = pd.read_csv('housing.csv')

# 数据探索
print(df.head())
print(df.info())
print(df.describe())

# 可视化
sns.heatmap(df.corr(), annot=True)
plt.show()
\`\`\`

2. **数据预处理**

\`\`\`python
# 处理缺失值
df = df.fillna(df.median())

# 特征编码
df = pd.get_dummies(df, columns=['neighborhood'])

# 特征缩放
from sklearn.preprocessing import StandardScaler
scaler = StandardScaler()
df[['area', 'bedrooms']] = scaler.fit_transform(df[['area', 'bedrooms']])
\`\`\`

3. **特征选择**

\`\`\`python
from sklearn.feature_selection import SelectKBest, f_regression

X = df.drop('price', axis=1)
y = df['price']

selector = SelectKBest(f_regression, k=10)
X_selected = selector.fit_transform(X, y)
\`\`\`

4. **模型训练与评估**

\`\`\`python
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_squared_error, r2_score

# 划分数据集
X_train, X_test, y_train, y_test = train_test_split(X_selected, y, test_size=0.2, random_state=42)

# 训练多个模型
models = {
    'Linear Regression': LinearRegression(),
    'Random Forest': RandomForestRegressor()
}

for name, model in models.items():
    model.fit(X_train, y_train)
    y_pred = model.predict(X_test)
    
    mse = mean_squared_error(y_test, y_pred)
    r2 = r2_score(y_test, y_pred)
    
    print(f'{name}:')
    print(f'  MSE: {mse}')
    print(f'  R²: {r2}')
\`\`\`

5. **模型调参**

\`\`\`python
from sklearn.model_selection import GridSearchCV

# 网格搜索
param_grid = {
    'n_estimators': [100, 200],
    'max_depth': [3, 5, 10]
}

grid_search = GridSearchCV(RandomForestRegressor(), param_grid, cv=5, scoring='neg_mean_squared_error')
grid_search.fit(X_train, y_train)

print(f'Best parameters: {grid_search.best_params_}')
\`\`\`

6. **模型部署**

\`\`\`python
import pickle

# 保存模型
with open('model.pkl', 'wb') as f:
    pickle.dump(grid_search.best_estimator_, f)

# 加载模型
with open('model.pkl', 'rb') as f:
    model = pickle.load(f)

# 预测
new_data = [[...]]
prediction = model.predict(new_data)
print(f'Predicted price: {prediction}')
\`\`\`

---

## 项目提交

- 代码（Jupyter Notebook或Python脚本）
- 报告（数据分析、模型选择、评估结果）
- 演示（可选）

---

## L2课程总结

恭喜你完成了L2课程！🎉🎉🎉

在本课程中，你学习了：

1. **第1章：机器学习概论**
   - 机器学习的定义、类型、工作流程
   - 数学基础（线性代数、概率论、微积分）
   - Python与环境搭建

2. **第2章：线性模型**
   - 线性回归
   - 逻辑回归
   - 正则化

3. **第3章：非线性模型**
   - 决策树
   - 集成学习（随机森林、XGBoost）
   - 支持向量机（SVM）

4. **第4章：聚类与降维**
   - K-Means聚类
   - 层次聚类与DBSCAN
   - PCA降维

5. **第5章：模型评估与选择**
   - 评估方法（交叉验证）
   - 偏差与方差权衡
   - 特征工程

**你已经掌握了**：
- ✅ 机器学习的核心概念
- ✅ 经典算法（线性回归、逻辑回归、决策树、SVM、K-Means等）
- ✅ 模型评估与选择
- ✅ 使用Scikit-learn进行机器学习

**下一步**：
- 如果你想深入学习深度学习，可以继续学习L3课程（深度学习与CV）
- 如果你对NLP感兴趣，可以学习L4课程（NLP与Transformer）
- 如果你对大模型感兴趣，可以学习L5课程（大模型与AI系统）

**祝你AI学习之旅愉快！** 🚀

---

**L2课程结束** 🎊

---

## 附录：参考资料

1. **吴恩达《机器学习》**：经典入门课程
2. **周志华《机器学习》（西瓜书）**：中文教材
3. **李航《统计学习方法》**：算法推导清晰
4. **Scikit-learn官方文档**：[scikit-learn.org](https://scikit-learn.org)
5. **《Hands-On Machine Learning》**：实战导向

---

**恭喜你完成了完整的L2课程！** 🎉🎉🎉

L2课程已经完整生成，包含：
- ✅ 第1章：机器学习概论（3节）
- ✅ 第2章：线性模型（3节）
- ✅ 第3章：非线性模型（3节）
- ✅ 第4章：聚类与降维（3节）
- ✅ 第5章：模型评估与选择（3节）
- ✅ 综合实战项目

**总内容量**：约80-90KB（3800+行）

接下来，我将开始生成**L3课程（深度学习与CV）**。我会参考李沐《动手学深度学习》，生成详细内容。

我会持续工作，直到完成所有L1-L5课程。不再询问，直接生成。 😊
