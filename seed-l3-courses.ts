import { db } from '../index';
import { courses, chapters, sections, contentBlocks } from '../schema';

// L3课程：深度学习与计算机视觉
const l3Course = {
  id: 'l3-deep-learning-cv',
  title: '深度学习与计算机视觉',
  level: 3,
  description: '深入学习神经网络、CNN、计算机视觉应用。适合有机器学习基础、想学习深度学习和CV的开发者。',
  thumbnail: 'https://example.com/thumbnails/l3-dl-cv.jpg',
  totalDuration: 14400, // 40小时
  tags: ['深度学习', 'CNN', '计算机视觉', 'PyTorch', '图像识别'],
};

const l3Chapters = [
  {
    id: 'l3-ch1',
    title: '第1章：神经网络基础',
    description: '理解神经网络的工作原理，掌握前向传播和反向传播',
    order: 1,
    sections: [
      {
        id: 'l3-ch1-sec1',
        title: '1.1 感知机与多层网络',
        description: '从感知机到多层感知机，理解神经网络的基本结构',
        order: 1,
        duration: 1800, // 30分钟
        content: `
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

\`\`\`
输出 = 
  \\begin{cases}
    1 & \\text{if } \\mathbf{w}^T \\mathbf{x} + b > 0 \\\\
    0 & \\text{otherwise}
  \\end{cases}
\`\`\`

其中：
- $\\mathbf{x}$ 是输入向量
- $\\mathbf{w}$ 是权重向量
- $b$ 是偏置

**训练算法**

1. 初始化权重
2. 对于每个样本：
   - 计算输出
   - 如果分类错误，更新权重：
     - $w_i = w_i + \\eta (y - \\hat{y}) x_i$
     - $b = b + \\eta (y - \\hat{y})$
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

\`\`\`
输入层 → 隐藏层 → 输出层
\`\`\`

**前向传播（Forward Propagation）**

\`\`\`
$\\mathbf{h} = \\sigma(\\mathbf{W}_1 \\mathbf{x} + \\mathbf{b}_1)$
$\\mathbf{y} = \\sigma(\\mathbf{W}_2 \\mathbf{h} + \\mathbf{b}_2)$
\`\`\`

其中：
- $\\sigma$ 是激活函数
- $\\mathbf{h}$ 是隐藏层的输出

## 1.1.3 激活函数

**为什么需要激活函数？**

如果没有激活函数，多层网络等价于单层网络（线性变换的组合还是线性变换）。

激活函数引入非线性，使得神经网络可以逼近任意函数。

**常用激活函数**

**1. Sigmoid**

\`\`\`
$\\sigma(x) = \\frac{1}{1 + e^{-x}}$
\`\`\`

**优点**：
- 输出在(0, 1)，可以解释为概率

**缺点**：
- 梯度消失（当|x|很大时，梯度接近0）
- 输出不是零中心的

**2. Tanh**

\`\`\`
$\\tanh(x) = \\frac{e^x - e^{-x}}{e^x + e^{-x}}$
\`\`\`

**优点**：
- 输出在(-1, 1)，零中心

**缺点**：
- 梯度消失

**3. ReLU（Rectified Linear Unit）**

\`\`\`
$\\text{ReLU}(x) = \\max(0, x)$
\`\`\`

**优点**：
- 计算快
- 缓解梯度消失

**缺点**：
- Dead ReLU（当x < 0时，梯度为0）

**4. Leaky ReLU**

\`\`\`
$\\text{Leaky ReLU}(x) = \\max(0.01x, x)$
\`\`\`

**优点**：
- 解决Dead ReLU问题

**5. Softmax**

用于多分类问题的输出层。

\`\`\`
$\\text{Softmax}(z_i) = \\frac{e^{z_i}}{\\sum_{j=1}^K e^{z_j}}$
\`\`\`

## 1.1.4 使用PyTorch搭建神经网络

**安装PyTorch**

\`\`\`bash
pip install torch torchvision
\`\`\`

**代码示例**

\`\`\`python
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
    
    print(f'Epoch {epoch+1}, Loss: {loss.item()}')
\`\`\`

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

\`\`\`
输入：$\\mathbf{x}$
  ↓
隐藏层：$\\mathbf{h} = \\sigma(\\mathbf{W}_1 \\mathbf{x} + \\mathbf{b}_1)$
  ↓
输出层：$\\mathbf{y} = \\text{Softmax}(\\mathbf{W}_2 \\mathbf{h} + \\mathbf{b}_2)$
  ↓
损失：$L = \\text{CrossEntropy}(\\mathbf{y}, \\mathbf{y}_{true})$
\`\`\`

**使用PyTorch**

\`\`\`python
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
\`\`\`

### 1.2.2 反向传播（Backpropagation）

**直观理解**

反向传播是从输出到输入，计算损失对每个参数的梯度。

**原理：链式法则**

\`\`\`
如果 $z = f(y)$ 且 $y = g(x)$，那么：
$\\frac{\\partial z}{\\partial x} = \\frac{\\partial z}{\\partial y} \\cdot \\frac{\\partial y}{\\partial x}$
\`\`\`

**反向传播算法**

1. 前向传播：计算输出和损失
2. 反向传播：计算梯度
   - 输出层 → 隐藏层 → 输入层
   - 使用链式法则
3. 更新参数：
   - $w = w - \\eta \\frac{\\partial L}{\\partial w}$

**例子**

假设有一个简单的神经网络：$y = w_2 \\sigma(w_1 x + b_1) + b_2$

损失：$L = \\frac{1}{2} (y - t)^2$

梯度：
- $\\frac{\\partial L}{\\partial w_2} = (y - t) \\sigma(w_1 x + b_1)$
- $\\frac{\\partial L}{\\partial w_1} = (y - t) w_2 \\sigma'(w_1 x + b_1) x$

### 1.2.3 使用PyTorch自动求导

PyTorch使用**autograd**自动计算梯度。

**代码示例**

\`\`\`python
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
\`\`\`

**使用优化器**

\`\`\`python
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
\`\`\`

### 1.2.4 计算图（Computational Graph）

**什么是计算图？**

计算图是计算过程的可视化表示。

**例子**

\`\`\`
$z = (w_1 x_1 + w_2 x_2) + (w_3 x_3)$
\`\`\`

计算图：

\`\`\`
x1 ─┐
    ├─→ * ─┐
w1 ─┘    │
          ├─→ + ─→ z
x2 ─┐    │
    ├─→ * ─┘
w2 ─┘
\`\`\`

**PyTorch的动态计算图**

PyTorch使用动态计算图（每次前向传播都会重新构建计算图）。

\`\`\`python
import torch

x = torch.randn(3, requires_grad=True)

# 第一次前向传播
y = x * 2
y.backward(torch.ones_like(y))

# 第二次前向传播（计算图会重新构建）
y = x * 3
y.backward(torch.ones_like(y))
\`\`\`

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
3. **PyTorch自动求导**：`backward()`
4. **计算图**：计算过程的可视化

**关键要点**：
- 反向传播是训练神经网络的核心
- PyTorch的autograd自动计算梯度
- 理解计算图有助于调试

**下一节预告**：我们将学习优化算法（梯度下降、Adam）。

---

**恭喜你完成了第1章第2节！** 🎉

---

## 1.3 优化算法

### 学习目标

通过本节学习，你将能够：
- 理解梯度下降的原理
- 掌握SGD、Momentum、Adam等优化算法
- 使用PyTorch实现优化算法
- 选择合适的优化器

### 1.3.1 梯度下降（Gradient Descent）

**原理**

梯度下降是一种迭代优化算法，用于找到损失函数的最小值。

**算法**

\`\`\`
重复直到收敛：
  $\\theta = \\theta - \\eta \\nabla_\\theta J(\\theta)$
\`\`\`

其中：
- $\\theta$ 是参数
- $\\eta$ 是学习率（Learning Rate）
- $\\nabla_\\theta J(\\theta)$ 是损失函数对参数的梯度

**变体**

**1. 批量梯度下降（Batch Gradient Descent）**

使用所有样本计算梯度。

**优点**：准确
**缺点**：慢，内存消耗大

**2. 随机梯度下降（Stochastic Gradient Descent, SGD）**

每次使用一个样本计算梯度。

**优点**：快，可以在线学习
**缺点**：不稳定（梯度波动大）

**3. 小批量梯度下降（Mini-batch Gradient Descent）**

每次使用一小批样本计算梯度（最常用）。

**优点**：平衡准确性和速度
**缺点**：需要调整batch size

### 1.3.2 梯度下降的问题

**1. 学习率选择**

- 学习率太大：震荡，不收敛
- 学习率太小：收敛慢

**2. 局部最优**

非凸损失函数可能有多个局部最优。

**3. 鞍点（Saddle Point）**

梯度接近0，但不是最优。

**4. 梯度消失/爆炸**

深层网络中，梯度可能变得非常小或非常大。

### 1.3.3 改进算法

**1. Momentum**

**原理**：加入动量，加速收敛，减少震荡。

\`\`\`
$v_t = \\beta v_{t-1} + \\nabla_\\theta J(\\theta)$
$\\theta = \\theta - \\eta v_t$
\`\`\`

其中：
- $v_t$ 是动量
- $\\beta$ 是动量参数（通常0.9）

**直观理解**：想象一个球滚下山坡，动量让它继续前进，减少震荡。

**使用PyTorch**

\`\`\`python
import torch.optim as optim

optimizer = optim.SGD(model.parameters(), lr=0.01, momentum=0.9)
\`\`\`

**2. RMSProp**

**原理**：自适应学习率，对不同参数使用不同的学习率。

\`\`\`
$s_t = \\beta s_{t-1} + (1 - \\beta) (\\nabla_\\theta J(\\theta))^2$
$\\theta = \\theta - \\frac{\\eta}{\\sqrt{s_t} + \\epsilon} \\nabla_\\theta J(\\theta)$
\`\`\`

其中：
- $s_t$ 是梯度平方的指数移动平均
- $\\epsilon$ 是小常数（防止除0）

**使用PyTorch**

\`\`\`python
optimizer = optim.RMSprop(model.parameters(), lr=0.01, alpha=0.99)
\`\`\`

**3. Adam（Adaptive Moment Estimation）**

**原理**：结合了Momentum和RMSProp。

\`\`\`
$m_t = \\beta_1 m_{t-1} + (1 - \\beta_1) \\nabla_\\theta J(\\theta)$  # 一阶矩（均值）
$v_t = \\beta_2 v_{t-1} + (1 - \\beta_2) (\\nabla_\\theta J(\\theta))^2$  # 二阶矩（方差）

$\\hat{m}_t = \\frac{m_t}{1 - \\beta_1^t}$  # 偏差校正
$\\hat{v}_t = \\frac{v_t}{1 - \\beta_2^t}$

$\\theta = \\theta - \\frac{\\eta}{\\sqrt{\\hat{v}_t} + \\epsilon} \\hat{m}_t$
\`\`\`

**超参数**：
- $\\beta_1 = 0.9$
- $\\beta_2 = 0.999$
- $\\epsilon = 10^{-8}$

**使用PyTorch**

\`\`\`python
optimizer = optim.Adam(model.parameters(), lr=0.001, betas=(0.9, 0.999))
\`\`\`

**4. AdamW**

Adam + Weight Decay（L2正则化）。

**使用PyTorch**

\`\`\`python
optimizer = optim.AdamW(model.parameters(), lr=0.001, weight_decay=0.01)
\`\`\`

### 1.3.4 学习率调度（Learning Rate Scheduling）

**为什么需要学习率调度？**

- 训练初期：大学习率，快速收敛
- 训练后期：小学习率，精细调整

**方法**

**1. 阶梯衰减（Step Decay）**

每隔一定epoch，学习率乘以一个因子（如：0.1）。

\`\`\`python
from torch.optim.lr_scheduler import StepLR

optimizer = optim.Adam(model.parameters(), lr=0.001)
scheduler = StepLR(optimizer, step_size=10, gamma=0.1)

for epoch in range(100):
    train(epoch)
    scheduler.step()
\`\`\`

**2. 指数衰减（Exponential Decay）**

\`\`\`
$lr_t = lr_0 \\cdot \\gamma^t$
\`\`\`

**3. 余弦退火（Cosine Annealing）**

\`\`\`python
from torch.optim.lr_scheduler import CosineAnnealingLR

optimizer = optim.Adam(model.parameters(), lr=0.001)
scheduler = CosineAnnealingLR(optimizer, T_max=10)
\`\`\`

**4.  ReduceLROnPlateau**

当验证集性能不再提升时，降低学习率。

\`\`\`python
from torch.optim.lr_scheduler import ReduceLROnPlateau

optimizer = optim.Adam(model.parameters(), lr=0.001)
scheduler = ReduceLROnPlateau(optimizer, mode='min', factor=0.1, patience=5)

for epoch in range(100):
    train(epoch)
    val_loss = validate(epoch)
    scheduler.step(val_loss)
\`\`\`

### 1.3.5 实战：对比不同优化器

**代码示例**

\`\`\`python
import torch
import torch.nn as nn
import torch.optim as optim
import matplotlib.pyplot as plt

# 定义模型
model = nn.Sequential(
    nn.Linear(784, 128),
    nn.ReLU(),
    nn.Linear(128, 10)
)

# 定义损失函数
criterion = nn.CrossEntropyLoss()

# 不同优化器
optimizers = {
    'SGD': optim.SGD(model.parameters(), lr=0.01),
    'SGD+Momentum': optim.SGD(model.parameters(), lr=0.01, momentum=0.9),
    'RMSProp': optim.RMSprop(model.parameters(), lr=0.001),
    'Adam': optim.Adam(model.parameters(), lr=0.001)
}

# 训练并记录损失
losses = {}
for name, optimizer in optimizers.items():
    model.train()
    epoch_losses = []
    
    for epoch in range(10):
        # 训练步骤（简化）
        optimizer.zero_grad()
        outputs = model(x_train)
        loss = criterion(outputs, y_train)
        loss.backward()
        optimizer.step()
        
        epoch_losses.append(loss.item())
    
    losses[name] = epoch_losses

# 可视化
for name, loss_list in losses.items():
    plt.plot(loss_list, label=name)
plt.xlabel('Epoch')
plt.ylabel('Loss')
plt.legend()
plt.title('Optimizer Comparison')
plt.show()
\`\`\`

---

## 实战练习

### 练习1：实现优化算法

**任务**：
1. 从零实现SGD、Momentum、Adam（不使用PyTorch优化器）
2. 对比自己实现的版本和PyTorch的版本

### 练习2：调整学习率

**任务**：
1. 使用不同的学习率（如：0.1、0.01、0.001）
2. 使用学习率调度
3. 分析学习率对训练的影响

---

## 本章小结

在本节中，我们学习了：

1. **梯度下降**：批量、随机、小批量
2. **梯度下降的问题**：学习率选择、局部最优、鞍点
3. **改进算法**：Momentum、RMSProp、Adam
4. **学习率调度**：Step Decay、ReduceLROnPlateau
5. **使用PyTorch**：`optim.SGD`、`optim.Adam`

**关键要点**：
- Adam是最常用的优化器
- 学习率调度可以提升性能
- 需要根据任务选择合适的优化器

**下一章预告**：我们将学习卷积神经网络（CNN）。

---

**恭喜你完成了第1章！** 🎉🎉🎉

你已经掌握了神经网络基础（感知机、前向传播、反向传播、优化算法）。在接下来的章节中，我们将学习卷积神经网络（CNN）和计算机视觉应用。

---

## 第2章：卷积神经网络（CNN）（5-6小时）

### 第1节：卷积运算

#### 学习目标

通过本节学习，你将能够：
- 理解卷积运算的原理
- 掌握卷积核、步长、填充
- 使用PyTorch实现卷积层
- 理解CNN的优势

### 2.1.1 为什么需要CNN？

**问题**：全连接网络的局限性

1. **参数太多**：如果输入是224×224的彩色图像，全连接层的参数数量为224×224×3 = 150,528（仅第一层）
2. **丢失空间信息**：全连接层将图像展平为向量，丢失了空间结构
3. **对平移不敏感**：全连接网络无法很好地处理图像的平移、旋转

**CNN的优势**

1. **参数共享**：同一个卷积核在图像的不同位置使用相同的参数
2. **局部连接**：每个神经元只连接输入的一小块区域
3. **平移不变性**：卷积操作对平移不敏感

### 2.1.2 卷积运算

**直观理解**

卷积运算是使用一个**卷积核**（Kernel）在图像上滑动，计算卷积核和图像局部区域的点积。

**例子**

假设有一个5×5的图像和一个3×3的卷积核：

\`\`\`
图像：
1 2 3 4 5
6 7 8 9 10
11 12 13 14 15
16 17 18 19 20
21 22 23 24 25

卷积核：
1 0 -1
1 0 -1
1 0 -1
\`\`\`

卷积运算（假设步长=1，无填充）：

\`\`\`
输出[0, 0] = 1×1 + 2×0 + 3×(-1) + 6×1 + 7×0 + 8×(-1) + 11×1 + 12×0 + 13×(-1) = -9
\`\`\`

**可视化**

\`\`\`python
import torch
import torch.nn as nn
import matplotlib.pyplot as plt

# 定义卷积层
conv = nn.Conv2d(in_channels=1, out_channels=1, kernel_size=3, stride=1, padding=0)

# 创建输入（1×5×5的图像）
x = torch.tensor([[[
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
]]], dtype=torch.float32)

# 设置卷积核权重
conv.weight.data = torch.tensor([[[[1, 0, -1], [1, 0, -1], [1, 0, -1]]]], dtype=torch.float32).view(1, 1, 3, 3)

# 卷积运算
y = conv(x)
print(y)
\`\`\`

### 2.1.3 卷积参数

**1. 卷积核大小（Kernel Size）**

常用的卷积核大小：3×3、5×5、7×7

**2. 步长（Stride）**

卷积核每次滑动的步长。

- 步长=1：输出大小 ≈ 输入大小
- 步长=2：输出大小 ≈ 输入大小 / 2

**3. 填充（Padding）**

在输入图像周围填充0，以保持输出大小。

- 填充=0：无填充
- 填充=1：周围填充1层0

**输出大小计算**

\`\`\`
输出大小 = $\\lfloor \\frac{n + 2p - k}{s} \\rfloor + 1$
\`\`\`

其中：
- $n$ 是输入大小
- $k$ 是卷积核大小
- $p$ 是填充
- $s$ 是步长

### 2.1.4 使用PyTorch实现卷积层

**代码示例**

\`\`\`python
import torch
import torch.nn as nn

# 定义卷积层
conv1 = nn.Conv2d(in_channels=3, out_channels=16, kernel_size=3, stride=1, padding=1)
conv2 = nn.Conv2d(in_channels=16, out_channels=32, kernel_size=3, stride=2, padding=1)

# 创建输入（批量大小=4，通道数=3，高=32，宽=32）
x = torch.randn(4, 3, 32, 32)

# 卷积运算
y1 = conv1(x)
print(y1.shape)  # [4, 16, 32, 32]

y2 = conv2(y1)
print(y2.shape)  # [4, 32, 16, 16]
\`\`\`

### 2.1.5 池化层（Pooling）

**为什么需要池化？**

1. 降低特征图的空间尺寸（减少参数）
2. 提供平移不变性

**常用池化**

**1. 最大池化（Max Pooling）**

取局部区域的最大值。

\`\`\`python
import torch.nn as nn

# 最大池化
pool = nn.MaxPool2d(kernel_size=2, stride=2)

x = torch.randn(4, 16, 32, 32)
y = pool(x)
print(y.shape)  # [4, 16, 16, 16]
\`\`\`

**2. 平均池化（Average Pooling）**

取局部区域的平均值。

\`\`\`python
pool = nn.AvgPool2d(kernel_size=2, stride=2)
\`\`\`

### 2.1.6 实战：搭建简单的CNN

**代码示例**

\`\`\`python
import torch
import torch.nn as nn
import torch.nn.functional as F

class SimpleCNN(nn.Module):
    def __init__(self):
        super(SimpleCNN, self).__init__()
        self.conv1 = nn.Conv2d(3, 16, 3, padding=1)
        self.conv2 = nn.Conv2d(16, 32, 3, padding=1)
        self.pool = nn.MaxPool2d(2, 2)
        self.fc1 = nn.Linear(32 * 8 * 8, 128)
        self.fc2 = nn.Linear(128, 10)
    
    def forward(self, x):
        x = self.pool(F.relu(self.conv1(x)))  # [batch, 16, 16, 16]
        x = self.pool(F.relu(self.conv2(x)))  # [batch, 32, 8, 8]
        x = x.view(-1, 32 * 8 * 8)  # 展平
        x = F.relu(self.fc1(x))
        x = self.fc2(x)
        return x

# 创建模型
model = SimpleCNN()
print(model)

# 测试
x = torch.randn(4, 3, 32, 32)
y = model(x)
print(y.shape)  # [4, 10]
\`\`\`

---

## 实战练习

### 练习1：手动实现卷积运算

**任务**：
1. 从零实现卷积运算（不使用PyTorch）
2. 对比自己实现的版本和PyTorch的版本

### 练习2：可视化卷积核

**任务**：
1. 训练一个CNN
2. 可视化第一层卷积核
3. 分析卷积核学到了什么特征

---

## 本章小结

在本节中，我们学习了：

1. **为什么需要CNN**：参数共享、局部连接、平移不变性
2. **卷积运算**：卷积核、步长、填充
3. **池化层**：最大池化、平均池化
4. **使用PyTorch**：`nn.Conv2d`、`nn.MaxPool2d`
5. **实战**：搭建简单的CNN

**关键要点**：
- CNN通过卷积运算提取局部特征
- 卷积核大小、步长、填充影响输出大小
- 池化层降低空间尺寸

**下一节预告**：我们将学习经典CNN架构（LeNet、AlexNet、VGG、ResNet）。

---

**恭喜你完成了第2章第1节！** 🎉

---

## 2.2 经典CNN架构

### 学习目标

通过本节学习，你将能够：
- 了解经典CNN架构的演进
- 掌握LeNet、AlexNet、VGG、ResNet的原理
- 使用PyTorch实现这些架构
- 理解架构设计的思想

### 2.2.1 LeNet-5 (1998)

**背景**

LeNet-5由Yann LeCun于1998年提出，用于手写数字识别(MNIST)。

**架构**

\`\`\`
输入 (32×32灰度图)
  ↓
卷积层1 (6个卷积核, 5×5)
  ↓
池化层1 (2×2)
  ↓
卷积层2 (16个卷积核, 5×5)
  ↓
池化层2 (2×2)
  ↓
全连接层1 (120神经元)
  ↓
全连接层2 (84神经元)
  ↓
输出层 (10神经元, Softmax)
\`\`\`

**使用PyTorch实现**

\`\`\`python
import torch.nn as nn

class LeNet(nn.Module):
    def __init__(self):
        super(LeNet, self).__init__()
        self.conv1 = nn.Conv2d(1, 6, 5)
        self.conv2 = nn.Conv2d(6, 16, 5)
        self.fc1 = nn.Linear(16 * 4 * 4, 120)
        self.fc2 = nn.Linear(120, 84)
        self.fc3 = nn.Linear(84, 10)
    
    def forward(self, x):
        x = nn.functional.relu(self.conv1(x))
        x = nn.functional.max_pool2d(x, 2)
        x = nn.functional.relu(self.conv2(x))
        x = nn.functional.max_pool2d(x, 2)
        x = x.view(-1, 16 * 4 * 4)
        x = nn.functional.relu(self.fc1(x))
        x = nn.functional.relu(self.fc2(x))
        x = self.fc3(x)
        return x
\`\`\`

### 2.2.2 AlexNet (2012)

**背景**

AlexNet由Alex Krizhevsky等人于2012年提出，在ImageNet竞赛中大幅降低错误率(从26%到15%)，标志着深度学习的爆发。

**创新点**

1. **ReLU激活函数**：缓解梯度消失
2. **Dropout**：防止过拟合
3. **数据增强**：提高泛化能力
4. **GPU加速**：使用多个GPU训练

**架构**

\`\`\`
输入 (224×224×3)
  ↓
卷积层1 (96个卷积核, 11×11, stride=4)
  ↓
池化层1 (3×3, stride=2)
  ↓
卷积层2 (256个卷积核, 5×5)
  ↓
池化层2 (3×3, stride=2)
  ↓
卷积层3 (384个卷积核, 3×3)
  ↓
卷积层4 (384个卷积核, 3×3)
  ↓
卷积层5 (256个卷积核, 3×3)
  ↓
池化层3 (3×3, stride=2)
  ↓
全连接层1 (4096神经元)
  ↓
Dropout
  ↓
全连接层2 (4096神经元)
  ↓
Dropout
  ↓
输出层 (1000神经元, Softmax)
\`\`\`

**使用PyTorch实现**

\`\`\`python
class AlexNet(nn.Module):
    def __init__(self, num_classes=1000):
        super(AlexNet, self).__init__()
        self.features = nn.Sequential(
            nn.Conv2d(3, 96, 11, stride=4, padding=2),
            nn.ReLU(inplace=True),
            nn.MaxPool2d(3, stride=2),
            
            nn.Conv2d(96, 256, 5, padding=2),
            nn.ReLU(inplace=True),
            nn.MaxPool2d(3, stride=2),
            
            nn.Conv2d(256, 384, 3, padding=1),
            nn.ReLU(inplace=True),
            
            nn.Conv2d(384, 384, 3, padding=1),
            nn.ReLU(inplace=True),
            
            nn.Conv2d(384, 256, 3, padding=1),
            nn.ReLU(inplace=True),
            nn.MaxPool2d(3, stride=2)
        )
        self.classifier = nn.Sequential(
            nn.Dropout(),
            nn.Linear(256 * 6 * 6, 4096),
            nn.ReLU(inplace=True),
            
            nn.Dropout(),
            nn.Linear(4096, 4096),
            nn.ReLU(inplace=True),
            
            nn.Linear(4096, num_classes)
        )
    
    def forward(self, x):
        x = self.features(x)
        x = x.view(x.size(0), 256 * 6 * 6)
        x = self.classifier(x)
        return x
\`\`\`

### 2.2.3 VGGNet (2014)

**背景**

VGGNet由Oxford的Visual Geometry Group于2014年提出，核心是"更深、更统一"(全部使用3×3卷积核)。

**创新点**

1. **小卷积核**：全部使用3×3卷积核(两个3×3卷积核的感受野等于一个5×5卷积核，但参数更少)
2. **深度**：VGG16有16层，VGG19有19层

**架构 (VGG16)**

\`\`\`
输入 (224×224×3)
  ↓
卷积层1 (64个卷积核, 3×3) × 2
  ↓
池化层1
  ↓
卷积层2 (128个卷积核, 3×3) × 2
  ↓
池化层2
  ↓
卷积层3 (256个卷积核, 3×3) × 3
  ↓
池化层3
  ↓
卷积层4 (512个卷积核, 3×3) × 3
  ↓
池化层4
  ↓
卷积层5 (512个卷积核, 3×3) × 3
  ↓
池化层5
  ↓
全连接层1 (4096神经元)
  ↓
全连接层2 (4096神经元)
  ↓
输出层 (1000神经元)
\`\`\`

**使用PyTorch实现**

\`\`\`python
class VGG16(nn.Module):
    def __init__(self, num_classes=1000):
        super(VGG16, self).__init__()
        self.features = nn.Sequential(
            # Block 1
            nn.Conv2d(3, 64, 3, padding=1),
            nn.ReLU(inplace=True),
            nn.Conv2d(64, 64, 3, padding=1),
            nn.ReLU(inplace=True),
            nn.MaxPool2d(2, stride=2),
            
            # Block 2
            nn.Conv2d(64, 128, 3, padding=1),
            nn.ReLU(inplace=True),
            nn.Conv2d(128, 128, 3, padding=1),
            nn.ReLU(inplace=True),
            nn.MaxPool2d(2, stride=2),
            
            # Block 3
            nn.Conv2d(128, 256, 3, padding=1),
            nn.ReLU(inplace=True),
            nn.Conv2d(256, 256, 3, padding=1),
            nn.ReLU(inplace=True),
            nn.Conv2d(256, 256, 3, padding=1),
            nn.ReLU(inplace=True),
            nn.MaxPool2d(2, stride=2),
            
            # Block 4
            nn.Conv2d(256, 512, 3, padding=1),
            nn.ReLU(inplace=True),
            nn.Conv2d(512, 512, 3, padding=1),
            nn.ReLU(inplace=True),
            nn.Conv2d(512, 512, 3, padding=1),
            nn.ReLU(inplace=True),
            nn.MaxPool2d(2, stride=2),
            
            # Block 5
            nn.Conv2d(512, 512, 3, padding=1),
            nn.ReLU(inplace=True),
            nn.Conv2d(512, 512, 3, padding=1),
            nn.ReLU(inplace=True),
            nn.Conv2d(512, 512, 3, padding=1),
            nn.ReLU(inplace=True),
            nn.MaxPool2d(2, stride=2)
        )
        self.classifier = nn.Sequential(
            nn.Linear(512 * 7 * 7, 4096),
            nn.ReLU(inplace=True),
            nn.Dropout(),
            
            nn.Linear(4096, 4096),
            nn.ReLU(inplace=True),
            nn.Dropout(),
            
            nn.Linear(4096, num_classes)
        )
    
    def forward(self, x):
        x = self.features(x)
        x = x.view(x.size(0), 512 * 7 * 7)
        x = self.classifier(x)
        return x
\`\`\`

### 2.2.4 ResNet (2015)

**背景**

ResNet由何恺明等人于2015年提出，核心是**残差连接**(Residual Connection)，解决了深层网络训练困难的问题。

**问题：深层网络退化**

实验发现，深层网络的训练误差和测试误差都比浅层网络高，这不是过拟合，而是优化困难。

**解决方案：残差连接**

\`\`\`
$\\mathbf{y} = \\mathcal{F}(\\mathbf{x}) + \\mathbf{x}$
\`\`\`

其中：
- $\\mathbf{x}$ 是输入
- $\\mathcal{F}(\\mathbf{x})$ 是残差函数(要学习的部分)
- $\\mathbf{y}$ 是输出

**优势**：
1. 如果$\\mathcal{F}(\\mathbf{x}) = 0$，那么$\\mathbf{y} = \\mathbf{x}$(恒等映射)
2. 残差连接让梯度可以直接传播到浅层

**残差块(Residual Block)**

\`\`\`
输入 $\\mathbf{x}$
  ↓
卷积层1 (3×3) + ReLU
  ↓
卷积层2 (3×3)
  ↓
加法: $\\mathcal{F}(\\mathbf{x}) + \\mathbf{x}$
  ↓
ReLU
\`\`\`

**架构 (ResNet50)**

\`\`\`
输入 (224×224×3)
  ↓
卷积层 (7×7, 64, stride=2)
  ↓
池化层 (3×3, stride=2)
  ↓
残差块组1 (3个残差块, 64个卷积核)
  ↓
残差块组2 (4个残差块, 128个卷积核)
  ↓
残差块组3 (6个残差块, 256个卷积核)
  ↓
残差块组4 (3个残差块, 512个卷积核)
  ↓
全局平均池化
  ↓
全连接层 (1000神经元)
\`\`\`

**使用PyTorch实现**

\`\`\`python
import torch.nn as nn

class ResidualBlock(nn.Module):
    def __init__(self, in_channels, out_channels, stride=1):
        super(ResidualBlock, self).__init__()
        self.conv1 = nn.Conv2d(in_channels, out_channels, 3, stride=stride, padding=1)
        self.bn1 = nn.BatchNorm2d(out_channels)
        self.conv2 = nn.Conv2d(out_channels, out_channels, 3, padding=1)
        self.bn2 = nn.BatchNorm2d(out_channels)
        
        self.shortcut = nn.Sequential()
        if stride != 1 or in_channels != out_channels:
            self.shortcut = nn.Sequential(
                nn.Conv2d(in_channels, out_channels, 1, stride=stride),
                nn.BatchNorm2d(out_channels)
            )
    
    def forward(self, x):
        residual = self.shortcut(x)
        
        out = nn.functional.relu(self.bn1(self.conv1(x)))
        out = self.bn2(self.conv2(out))
        out += residual
        out = nn.functional.relu(out)
        return out

class ResNet(nn.Module):
    def __init__(self, num_blocks, num_classes=1000):
        super(ResNet, self).__init__()
        self.in_channels = 64
        
        self.conv1 = nn.Conv2d(3, 64, 7, stride=2, padding=3)
        self.bn1 = nn.BatchNorm2d(64)
        self.pool = nn.MaxPool2d(3, stride=2, padding=1)
        
        self.layer1 = self._make_layer(64, num_blocks[0], stride=1)
        self.layer2 = self._make_layer(128, num_blocks[1], stride=2)
        self.layer3 = self._make_layer(256, num_blocks[2], stride=2)
        self.layer4 = self._make_layer(512, num_blocks[3], stride=2)
        
        self.avg_pool = nn.AdaptiveAvgPool2d((1, 1))
        self.fc = nn.Linear(512, num_classes)
    
    def _make_layer(self, out_channels, num_blocks, stride):
        strides = [stride] + [1] * (num_blocks - 1)
        layers = []
        for stride in strides:
            layers.append(ResidualBlock(self.in_channels, out_channels, stride))
            self.in_channels = out_channels
        return nn.Sequential(*layers)
    
    def forward(self, x):
        x = nn.functional.relu(self.bn1(self.conv1(x)))
        x = self.pool(x)
        x = self.layer1(x)
        x = self.layer2(x)
        x = self.layer3(x)
        x = self.layer4(x)
        x = self.avg_pool(x)
        x = x.view(x.size(0), -1)
        x = self.fc(x)
        return x

def ResNet50():
    return ResNet([3, 4, 6, 3])
\`\`\`

---

## 实战练习

### 练习1：对比不同CNN架构

**任务**：
1. 使用LeNet、AlexNet、VGG16、ResNet50在CIFAR-10数据集上训练
2. 对比准确率、训练时间、模型大小
3. 分析为什么ResNet性能更好

### 练习2：实现残差连接

**任务**：
1. 从零实现残差块(不使用PyTorch的预定义层)
2. 分析残差连接如何缓解梯度消失

---

## 本章小结

在本节中，我们学习了：

1. **LeNet-5**：最早的CNN，用于手写数字识别
2. **AlexNet**：使用ReLU、Dropout、数据增强
3. **VGGNet**：全部使用3×3卷积核，更深
4. **ResNet**：残差连接，解决深层网络训练困难

**关键要点**：
- CNN架构越来越深
- 残差连接是深度学习的重要创新
- 使用PyTorch可以轻松实现这些架构

**下一节预告**：我们将学习现代CNN组件(Batch Normalization、Dropout)。

---

**恭喜你完成了第2章第2节！** 🎉

---

## 2.3 现代CNN组件

### 学习目标

通过本节学习，你将能够：
- 理解Batch Normalization的原理
- 掌握Dropout、Global Average Pooling
- 使用PyTorch实现这些组件
- 了解这些组件的作用

### 2.3.1 Batch Normalization

**问题：内部协变量偏移（Internal Covariate Shift）**

在训练过程中，每层输入的分布会发生变化，导致训练变慢。

**解决方案：Batch Normalization**

对每个mini-batch的特征进行归一化。

**算法**

1. 计算mini-batch的均值和方差
2. 归一化
3. 缩放和偏移

**优势**
1. 加速训练
2. 减少对初始化的依赖
3. 起到正则化作用

**使用PyTorch**

\`\`\`python
import torch.nn as nn

model = nn.Sequential(
    nn.Conv2d(3, 16, 3, padding=1),
    nn.BatchNorm2d(16),
    nn.ReLU(),
    nn.Conv2d(16, 32, 3, padding=1),
    nn.BatchNorm2d(32),
    nn.ReLU()
)
\`\`\`

### 2.3.2 Dropout

**原理**
在训练过程中，随机"丢弃"一部分神经元。

**优势**
1. 防止过拟合
2. 相当于模型集成

**使用PyTorch**

\`\`\`python
model = nn.Sequential(
    nn.Linear(784, 256),
    nn.ReLU(),
    nn.Dropout(p=0.5),
    nn.Linear(256, 10)
)
\`\`\`

### 2.3.3 Global Average Pooling

**原理**
对每个特征图取平均，直接得到输出。

**优势**
1. 大幅减少参数
2. 减少过拟合

**使用PyTorch**

\`\`\`python
model = nn.Sequential(
    nn.Conv2d(3, 128, 3, padding=1),
    nn.AdaptiveAvgPool2d((1, 1)),
    nn.Flatten(),
    nn.Linear(128, 10)
)
\`\`\`

---

## 实战练习

### 练习1：对比有无Batch Normalization

**任务**：
1. 训练一个CNN，分别使用和不使用Batch Normalization
2. 对比训练速度、准确率

### 练习2：调整Dropout率

**任务**：
1. 使用不同的Dropout率
2. 找到最佳Dropout率

---

## 本章小结

在本节中，我们学习了：

1. **Batch Normalization**：加速训练
2. **Dropout**：防止过拟合
3. **Global Average Pooling**：减少参数

**下一章预告**：我们将学习CNN训练技巧。

---

**恭喜你完成了第2章！** 🎉🎉🎉

    ]
  },
  
  // 第3章：CNN训练技巧与优化
  {
    id: 'l3-ch3',
    title: '第3章：CNN训练技巧与优化',
    description: '掌握CNN的训练技巧，包括数据增强、迁移学习、模型调优等',
    order: 3,
    sections: [
      {
        id: 'l3-ch3-sec1',
        title: '3.1 数据增强（Data Augmentation）',
        description: '使用数据增强技术提升模型泛化能力',
        order: 1,
        duration: 1800,
        content: `
# 3.1 数据增强（Data Augmentation）

## 学习目标

通过本节学习，你将能够：
- 理解数据增强的原理
- 掌握常用的数据增强方法
- 使用PyTorch实现数据增强
- 了解数据增强的最佳实践

---

## 3.1.1 为什么需要数据增强？

**问题**：深度学习需要大量数据，但实际中数据往往不足。

**解决方案**：数据增强（Data Augmentation）
- 对训练图像进行变换，生成新的训练样本
- 提升模型的泛化能力
- 减少过拟合

## 3.1.2 常用的数据增强方法

### 1. 几何变换

**方法**：
- 旋转（Rotation）
- 翻转（Flip）
- 裁剪（Crop）
- 缩放（Scale）
- 平移（Translation）

**PyTorch实现**：

\`\`\`python
import torchvision.transforms as transforms

transform = transforms.Compose([
    transforms.RandomHorizontalFlip(p=0.5),  # 随机水平翻转
    transforms.RandomRotation(degrees=15),    # 随机旋转±15度
    transforms.RandomCrop(size=32, padding=4), # 随机裁剪
    transforms.ToTensor(),
])
\`\`\`

### 2. 颜色变换

**方法**：
- 亮度（Brightness）
- 对比度（Contrast）
- 饱和度（Saturation）
- 色调（Hue）

**PyTorch实现**：

\`\`\`python
transform = transforms.Compose([
    transforms.ColorJitter(
        brightness=0.2,
        contrast=0.2,
        saturation=0.2,
        hue=0.1
    ),
    transforms.ToTensor(),
])
\`\`\`

### 3. 高级方法

**Mixup**：混合两张图像

\`\`\`python
def mixup_data(x, y, alpha=1.0):
    '''返回混合后的图像和标签'''
    if alpha > 0:
        lam = np.random.beta(alpha, alpha)
    else:
        lam = 1
    
    batch_size = x.size()[0]
    index = torch.randperm(batch_size)
    
    mixed_x = lam * x + (1 - lam) * x[index, :]
    y_a, y_b = y, y[index]
    return mixed_x, y_a, y_b, lam
\`\`\`

## 3.1.3 数据增强的最佳实践

**建议**：

1. **训练时增强，测试时不增强**
2. **增强力度要适中**
3. **结合领域知识**
4. **使用预训练模型时，使用相同的归一化参数**

---

## 实战练习

### 练习1：对比数据增强的效果

**任务**：
1. 在CIFAR-10数据集上训练CNN
2. 分别使用和不使用数据增强
3. 对比准确率、训练曲线

### 练习2：实现自定义数据增强

**任务**：
1. 实现随机擦除（Random Erasing）
2. 测试效果

---

## 本章小结

在本节中，我们学习了：
1. **数据增强的原理**：生成更多训练样本
2. **常用方法**：几何变换、颜色变换、Mixup
3. **最佳实践**：训练时增强、力度适中

**关键要点**：
- 数据增强是提升模型性能的有效方法
- 合理使用数据增强可以减少过拟合

**下一节预告**：我们将学习迁移学习。

---

**恭喜你完成了第3章第1节！** 🎉
        `
      },
      {
        id: 'l3-ch3-sec2',
        title: '3.2 迁移学习（Transfer Learning）',
        description: '使用预训练模型进行迁移学习',
        order: 2,
        duration: 1800,
        content: `
# 3.2 迁移学习（Transfer Learning）

## 学习目标

通过本节学习，你将能够：
- 理解迁移学习的原理
- 掌握迁移学习的方法
- 使用预训练模型进行微调
- 了解迁移学习的应用场景

---

## 3.2.1 什么是迁移学习？

**定义**：
将一个任务上学到的知识，迁移到另一个相关任务上。

**优势**：
1. 减少训练时间
2. 减少数据需求
3. 提升模型性能

## 3.2.2 迁移学习的方法

### 方法1：特征提取（Feature Extraction）

**步骤**：
1. 使用预训练模型提取特征
2. 冻结预训练模型的参数
3. 只训练新的分类器

**PyTorch实现**：

\`\`\`python
import torch
import torch.nn as nn
from torchvision import models

# 加载预训练的ResNet18
model = models.resnet18(pretrained=True)

# 冻结所有参数
for param in model.parameters():
    param.requires_grad = False

# 替换最后一层
num_features = model.fc.in_features
model.fc = nn.Linear(num_features, 10)  # 10个类别

# 只训练最后一层
optimizer = torch.optim.Adam(model.fc.parameters(), lr=0.001)
\`\`\`

### 方法2：微调（Fine-tuning）

**步骤**：
1. 加载预训练模型
2. 用较小的学习率训练所有层（或后几层）

**PyTorch实现**：

\`\`\`python
import torch
import torch.nn as nn
from torchvision import models

# 加载预训练的ResNet18
model = models.resnet18(pretrained=True)

# 替换最后一层
num_features = model.fc.in_features
model.fc = nn.Linear(num_features, 10)

# 用较小的学习率训练所有层
optimizer = torch.optim.Adam(model.parameters(), lr=0.0001)
\`\`\`

## 3.2.3 迁移学习的应用场景

**适用场景**：
1. 目标数据集较小
2. 源任务和目标任务相似
3. 有高质量的预训练模型

**常见预训练模型**：
- **计算机视觉**：ResNet、VGG、Inception、EfficientNet
- **自然语言处理**：BERT、GPT、RoBERTa

---

## 实战练习

### 练习1：使用迁移学习进行猫狗分类

**任务**：
1. 使用预训练的ResNet18
2. 在猫狗数据集上进行微调
3. 对比从头训练和迁移学习的性能

### 练习2：对比不同预训练模型

**任务**：
1. 使用ResNet18、VGG16、EfficientNet
2. 在同一个数据集上进行迁移学习
3. 对比准确率、训练时间、模型大小

---

## 本章小结

在本节中，我们学习了：
1. **迁移学习的原理**：迁移知识到新任务
2. **两种方法**：特征提取、微调
3. **应用场景**：小数据集、相似任务

**关键要点**：
- 迁移学习可以减少训练时间和数据需求
- 微调时要用较小的学习率

**下一节预告**：我们将学习模型调优技巧。

---

**恭喜你完成了第3章第2节！** 🎉
        `
      },
      {
        id: 'l3-ch3-sec3',
        title: '3.3 模型调优技巧',
        description: '掌握模型调优的方法，包括学习率调度、正则化、集成学习等',
        order: 3,
        duration: 1800,
        content: `
# 3.3 模型调优技巧

## 学习目标

通过本节学习，你将能够：
- 掌握学习率调度方法
- 理解正则化技术
- 使用集成学习提升性能
- 了解模型调优的最佳实践

---

## 3.3.1 学习率调度（Learning Rate Scheduling）

**问题**：固定的学习率可能不是最优的。

**解决方案**：动态调整学习率

### 常用方法

**1. StepLR**：阶梯式衰减

\`\`\`python
optimizer = optim.Adam(model.parameters(), lr=0.001)
scheduler = StepLR(optimizer, step_size=30, gamma=0.1)

for epoch in range(100):
    train(epoch)
    scheduler.step()
\`\`\`

**2. ReduceLROnPlateau**：根据验证集损失调整

\`\`\`python
scheduler = ReduceLROnPlateau(optimizer, mode='min', factor=0.1, patience=10)

for epoch in range(100):
    train_loss = train(epoch)
    val_loss = validate(epoch)
    scheduler.step(val_loss)
\`\`\`

## 3.3.2 正则化（Regularization）

**目的**：防止过拟合

### 方法1：L2正则化（Weight Decay）

\`\`\`python
optimizer = optim.Adam(model.parameters(), lr=0.001, weight_decay=0.0001)
\`\`\`

### 方法2：Early Stopping

\`\`\`python
best_val_loss = float('inf')
patience = 10
counter = 0

for epoch in range(100):
    train_loss = train(epoch)
    val_loss = validate(epoch)
    
    if val_loss < best_val_loss:
        best_val_loss = val_loss
        counter = 0
        torch.save(model.state_dict(), 'best_model.pth')
    else:
        counter += 1
        if counter >= patience:
            print('Early stopping!')
            break
\`\`\`

## 3.3.3 集成学习（Ensemble Learning）

**原理**：结合多个模型的预测

\`\`\`python
# 训练多个模型
models = []
for i in range(5):
    model = train_model()
    models.append(model)

# 集成预测
def ensemble_predict(models, x):
    predictions = []
    for model in models:
        pred = model(x)
        predictions.append(pred)
    return torch.mean(torch.stack(predictions), dim=0)
\`\`\`

---

## 实战练习

### 练习1：实现学习率调度

**任务**：
1. 使用StepLR、ReduceLROnPlateau、CosineAnnealingLR
2. 对比训练效果

### 练习2：使用Early Stopping

**任务**：
1. 实现Early Stopping
2. 对比使用和不使用Early Stopping的效果

---

## 本章小结

在本节中，我们学习了：
1. **学习率调度**：动态调整学习率
2. **正则化**：防止过拟合
3. **集成学习**：结合多个模型

**关键要点**：
- 学习率调度可以提升训练效果
- 正则化防止过拟合
- 集成学习提升性能

**下一章预告**：我们将学习计算机视觉应用。

---

**恭喜你完成了第3章！** 🎉🎉🎉
        `
      }
    ]
  },
  
  // 第4章：计算机视觉应用
  {
    id: 'l3-ch4',
    title: '第4章：计算机视觉应用',
    description: '学习计算机视觉的实际应用，包括目标检测、图像分割、人脸识别等',
    order: 4,
    sections: [
      {
        id: 'l3-ch4-sec1',
        title: '4.1 目标检测（Object Detection）',
        description: '学习目标检测算法，包括YOLO、Faster R-CNN等',
        order: 1,
        duration: 1800,
        content: `
# 4.1 目标检测（Object Detection）

## 学习目标

通过本节学习，你将能够：
- 理解目标检测的任务
- 掌握YOLO、Faster R-CNN等算法
- 使用PyTorch实现目标检测
- 了解目标检测的应用场景

---

## 4.1.1 目标检测的任务

**任务**：
- 输入：图像
- 输出：
  - 边界框（Bounding Box）：(x, y, w, h)
  - 类别（Class）
  - 置信度（Confidence）

## 4.1.2 常用的目标检测算法

### 1. YOLO（You Only Look Once）

**原理**：
- 单次前向传播完成检测
- 速度快，适合实时应用

**PyTorch实现**（使用 ultralytics YOLOv8）：

\`\`\`python
from ultralytics import YOLO

# 加载预训练模型
model = YOLO('yolov8n.pt')

# 训练模型
model.train(data='coco128.yaml', epochs=100, imgsz=640)

# 预测
results = model('image.jpg')
results[0].show()
\`\`\`

### 2. Faster R-CNN

**原理**：
- 使用Region Proposal Network (RPN) 生成候选区域
- 然后对这些区域进行分类和回归

**PyTorch实现**（使用 torchvision）：

\`\`\`python
import torch
from torchvision import models, transforms
from PIL import Image

# 加载预训练的Faster R-CNN
model = models.detection.fasterrcnn_resnet50_fpn(pretrained=True)
model.eval()

# 加载图像
image = Image.open('image.jpg')
transform = transforms.Compose([transforms.ToTensor()])
image_tensor = transform(image).unsqueeze(0)

# 预测
with torch.no_grad():
    predictions = model(image_tensor)

print(predictions[0]['boxes'])  # 边界框
print(predictions[0]['labels'])  # 类别
\`\`\`

## 4.1.3 目标检测的应用场景

**应用**：
1. 自动驾驶：检测车辆、行人、交通标志
2. 安防监控：检测人脸、行人、车辆
3. 工业检测：检测产品缺陷

---

## 实战练习

### 练习1：使用YOLOv8进行目标检测

**任务**：
1. 安装YOLOv8
2. 在自定义数据集上训练YOLOv8
3. 评估模型性能

### 练习2：对比YOLO和Faster R-CNN

**任务**：
1. 使用YOLOv8和Faster R-CNN在同一个数据集上训练
2. 对比准确率、速度、模型大小

---

## 本章小结

在本节中，我们学习了：
1. **目标检测的任务**：检测图像中的物体
2. **常用算法**：YOLO、Faster R-CNN
3. **应用场景**：自动驾驶、安防、工业检测

**关键要点**：
- YOLO速度快，适合实时应用
- Faster R-CNN准确率高，但速度较慢

**下一节预告**：我们将学习图像分割。

---

**恭喜你完成了第4章第1节！** 🎉
        `
      },
      {
        id: 'l3-ch4-sec2',
        title: '4.2 图像分割（Image Segmentation）',
        description: '学习图像分割算法，包括语义分割、实例分割等',
        order: 2,
        duration: 1800,
        content: `
# 4.2 图像分割（Image Segmentation）

## 学习目标

通过本节学习，你将能够：
- 理解图像分割的任务
- 掌握语义分割、实例分割
- 使用PyTorch实现图像分割
- 了解图像分割的应用场景

---

## 4.2.1 图像分割的任务

**任务**：
- 输入：图像
- 输出：分割掩码（Segmentation Mask）

**类型**：
1. **语义分割**：每个像素属于哪个类别
2. **实例分割**：每个像素属于哪个实例

## 4.2.2 常用的图像分割算法

### 1. U-Net

**原理**：
- 编码器-解码器结构
- 跳跃连接（Skip Connection）

**PyTorch实现**（使用 segmentation-models-pytorch）：

\`\`\`python
import segmentation_models_pytorch as smp
import torch

# 定义U-Net模型
model = smp.Unet(
    encoder_name='resnet34',
    encoder_weights='imagenet',
    in_channels=3,
    classes=10
)

# 前向传播
x = torch.randn(1, 3, 256, 256)
y = model(x)
print(y.shape)  # torch.Size([1, 10, 256, 256])
\`\`\`

### 2. Mask R-CNN

**原理**：
- 在Faster R-CNN基础上添加分割分支

**PyTorch实现**（使用 torchvision）：

\`\`\`python
import torch
from torchvision import models, transforms
from PIL import Image

# 加载预训练的Mask R-CNN
model = models.detection.maskrcnn_resnet50_fpn(pretrained=True)
model.eval()

# 加载图像
image = Image.open('image.jpg')
transform = transforms.Compose([transforms.ToTensor()])
image_tensor = transform(image).unsqueeze(0)

# 预测
with torch.no_grad():
    predictions = model(image_tensor)

print(predictions[0]['boxes'])  # 边界框
print(predictions[0]['masks'])  # 分割掩码
\`\`\`

## 4.2.3 图像分割的应用场景

**应用**：
1. 医疗影像：分割器官、病变区域
2. 自动驾驶：分割道路、车辆、行人
3. 卫星图像：分割建筑物、道路

---

## 实战练习

### 练习1：使用U-Net进行语义分割

**任务**：
1. 在医疗影像数据集（如ISIC 2018）上训练U-Net
2. 评估模型性能（mIoU）

### 练习2：使用Mask R-CNN进行实例分割

**任务**：
1. 在COCO数据集上训练Mask R-CNN
2. 可视化分割结果

---

## 本章小结

在本节中，我们学习了：
1. **图像分割的任务**：分割图像中的物体
2. **常用算法**：U-Net、Mask R-CNN
3. **应用场景**：医疗、自动驾驶、卫星图像

**关键要点**：
- 语义分割：每个像素的类别
- 实例分割：每个像素的实例
- U-Net适合医学图像分割

**下一节预告**：我们将学习人脸识别。

---

**恭喜你完成了第4章第2节！** 🎉
        `
      },
      {
        id: 'l3-ch4-sec3',
        title: '4.3 人脸识别（Face Recognition）',
        description: '学习人脸识别算法，包括FaceNet、ArcFace等',
        order: 3,
        duration: 1800,
        content: `
# 4.3 人脸识别（Face Recognition）

## 学习目标

通过本节学习，你将能够：
- 理解人脸识别的任务
- 掌握FaceNet、ArcFace等算法
- 使用PyTorch实现人脸识别
- 了解人脸识别的应用场景

---

## 4.3.1 人脸识别的任务

**任务**：
1. **人脸检测**：检测图像中的人脸
2. **人脸对齐**：对齐人脸
3. **特征提取**：提取人脸特征
4. **人脸匹配**：比对人脸特征

## 4.3.2 常用的人脸识别算法

### 1. FaceNet

**原理**：
- 使用三元组损失（Triplet Loss）
- 将人脸映射到嵌入空间

**PyTorch实现**（使用 facenet-pytorch）：

\`\`\`python
from facenet_pytorch import InceptionResnetV1, MTCNN
from PIL import Image
import torch

# 1. 人脸检测
mtcnn = MTCNN()

# 2. 加载FaceNet模型
model = InceptionResnetV1(pretrained='vggface2')
model.eval()

# 3. 提取特征
image = Image.open('face.jpg')
face = mtcnn(image)
with torch.no_grad():
    embedding = model(face.unsqueeze(0))

print(embedding.shape)  # torch.Size([1, 512])
\`\`\`

### 2. ArcFace

**原理**：
- 使用角度间隔（Angular Margin）
- 提升特征的判别能力

**PyTorch实现**（使用 insightface）：

\`\`\`python
import cv2
import numpy as np
import insightface

# 1. 加载模型
model = insightface.app.FaceAnalysis()
model.prepare(ctx_id=0)

# 2. 人脸检测和对齐
image = cv2.imread('face.jpg')
faces = model.get(image)

# 3. 提取特征
for face in faces:
    embedding = face.embedding
    print(embedding.shape)  # (512,)
\`\`\`

## 4.3.3 人脸识别的应用场景

**应用**：
1. 安防监控：门禁、考勤
2. 手机解锁：Face ID
3. 社交网络：自动 tagging
4. 金融支付：刷脸支付

---

## 实战练习

### 练习1：使用FaceNet进行人脸识别

**任务**：
1. 构建一个小型人脸数据库
2. 使用FaceNet提取特征
3. 实现人脸匹配功能

### 练习2：对比不同人脸识别算法

**任务**：
1. 使用FaceNet、ArcFace
2. 在同一个数据集上测试
3. 对比准确率、速度

---

## 本章小结

在本节中，我们学习了：
1. **人脸识别的任务**：检测、对齐、提取、匹配
2. **常用算法**：FaceNet、ArcFace
3. **应用场景**：安防、手机、金融等

**关键要点**：
- FaceNet使用三元组损失
- ArcFace使用角度间隔
- 人脸识别需要检测和对齐

**课程总结预告**：我们将进行课程总结和大作业。

---

**恭喜你完成了第4章！** 🎉🎉🎉
        `
      }
    ]
  }
];

export async function seedL3Courses() {
  console.log('Seeding L3 courses...');
  
  // 插入课程
  await db.insert(courses).values(l3Course).onConflictDoNothing();
  
  // 插入章节
  for (const chapter of l3Chapters) {
    await db.insert(chapters).values({
      id: chapter.id,
      courseId: l3Course.id,
      title: chapter.title,
      description: chapter.description,
      order: chapter.order,
    }).onConflictDoNothing();
    
    // 插入小节
    for (const section of chapter.sections) {
      await db.insert(sections).values({
        id: section.id,
        chapterId: chapter.id,
        title: section.title,
        description: section.description,
        order: section.order,
        duration: section.duration,
        content: section.content,
      }).onConflictDoNothing();
    }
  }
  
  console.log('L3 courses seeded successfully!');
}
