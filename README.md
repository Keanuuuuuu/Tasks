## K-s-box
这是我的第一个仓库
### 阶段一 初识markdown
#### 介绍
* **阶段一笔记中记录了对markdown的初步学习**
#### 心得
* 刚刚接触编程，面对这么庞大繁杂的知识体系，markdown可以很好的帮助
  我记笔记，我觉得对于这部分的学习点到为止，遇见没见过的再进行查阅
  学习
### 阶段二 typora与git的学习
#### 介绍
* **阶段二笔记中记录了对typora的初步学习**
* **阶段二笔记.2中记录了对git的初步学习**
### 阶段三 HTML、CSS、JavaScript的学习
#### 介绍
* **阶段三笔记中记录了对HTML和css的学习**
#### 心得
* HTML、css学习过程非常有趣，实现“所作即所得”，
* demo.1中是我在学习过程中第一个做得比较完整的网页，虽然比较简陋
  ，但我觉得算是一个学习的“里程碑”
### 阶段四 geek组招新网页复现
#### 介绍
* **阶段四中geek组招新网页复现网址  https://Keanuuuuuu.github.io/geek2.html**
#### 心得
* 在阶段三中没有系统进行js的学习，在制作geek网页的时候就利用这段
  充足的时间进行学习，等到寒假准备把学习笔记进行上传
### 阶段五 Python
#### 介绍
* **阶段五笔记中记录了对python的初步学习**
#### 心得
* python简洁高效是真的，但我用起来却有点吃力
* 这个阶段的学习自我感觉不是很好，刚放寒假心没有收好，对python的
  学习不全面，5天的时间算是把它过了一下
* 准备利用阶段六以及寒假之后的时间加深学习，加深记忆
### 阶段六 python与网络爬虫
#### 介绍
* Geek.py文件中是爬取招新网站文字的源代码；Geekimg.py是爬取图片的
  源代码
#### 心得
* 配套学习的教程很棒，但是讲的过于浅显，用得也很浅显，对于爬虫还需深入学习

### 2022.4.17
### review.HTML 
* js与vue的复习笔记

/*#include<iostream>
using namespace std;
class area_cl{
		protected:
			double height;
			double width;
		public:
			area_cl(double r,double s){
				height = r;
				width = s;
			}
			virtul double area() = 0;
};
class rectangle:public area_cl{
	rectangle(double h,double w):area_cl(h,w)
	{
		
	}
	double area()
	{
		return height*width;
	}
};
class isosceles:public area_cl{
	isosceles(double h,double w):area_cl(h,w)
	{
		
	}
	double area()
	{
		return height*width/2;
	}
};
int main()
{
	area_cl *p;
	rectangle A(10.0,5.0);
	isosceles B(4.0,6.0);
	p=&A;
	cout<<A->area()<<endl;
	p=&B;
	cout<<B->area()<<endl;
	return 0;
}*/
/*#include<iostream>
#include<string>
using namespace std;
class Time {
	public:
		Time(int h,int r,int s)
		{
			hours = h;
			minutes = m;
			seconds = s;
		}
		void display()
		{
			cout<<"出生时间："<<hours<<"时"<<minutes<<"分"<<seconds<<"秒"<<endl;
		}
	protected:
		int hours;
		int minutes;
		int seconds;
};
class Date{
	public:
		Date(int m,int d,int y)
		{
			month = m;
			day = d;
			year = y;
		}
		void display()
		{
			cout<<"出生年月日："<<year<<"年"<<month<<"月"<<day<<"日"<<endl;
		}
	protected:
		int month;
		int day;
		int year;
};
class Birthtime:public Time,public Date{
	public:
		Birthtime(string S,int a,int b,int c,int d,int e,int f):Time(a,b,c),Date(e,f,g),
		{
			Childname = S;
		}
		void display()
		{
			cout<<"孩子姓名"<<Childname<<endl;
			Date::display;
			Time::display;
		}
	private:
		string Childname
};
int main()
{
	Birthtime A("Tom",12,12,12,2022,1,1);
	A.display();
	return 0;
}*/

#include<iostream>
using namespace std;
class person{
	public:
		person(int a,string s)
		{
			id = a;
			name = s;
		}
		void display()
		{
			cout<<"编号为: "<<id<<"姓名为: "<<name<<endl;
		}
	private:
		int id;
		string name;
};
class student:public person{
	public:
		student(int a,int b,int c,string s):person(c,s)
		{
			classId = a;
			Score = b;
		}
		void show1()
		{
			display(); 
			cout<<"班号为："<<Classid<<"成绩为："<<Score<<endl;
		}
	private:
		int Classid;
		int Score;
};
class teacher:public person{
	public:
		teacher(string a,string b,int c,string s):person(c,s)
		{
			jobName = a;
			workPlace = b;
		}
		void show2()
		{
			display(); 
			cout<<"职称为："<<jobName<<"部门为："<<workPlace<<endl;
		}
	private:
		string jobName;
		string workPlace;
};
int main()
{
	student a(1,1,1,"Jim");
	a.show1();
	teacher b(2,2,2,"Alice");
	b.show2();
	return 0;
}
