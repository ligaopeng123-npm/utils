## 常用命令

1、根据关键字查找到docker 

  sudo docker ps -a | grep [关键字]

  sudo docker ps -a 查看所有镜像 包含挂掉的

  // 进入容器内部

  docker exec -it breakfast-report-project-test bash 

  // exit

2、查看对应的日志  

​    sudo docker logs -f --tail 10 84ab85db442b

​    \# -f --tail 10 查看10条日志 84ab85db442b 镜像id

3、查看实体日志

​    tail -f 10 xxx.log

docker logs -f --tail 10 f1ff71157283

## 常用镜像命令

```shell
docker run <image>               	# 执行docker镜像
docker info                      	# docker系统信息
docker images [-a | -q]          	# 查看所有镜像				
	-a								# 查看所有镜(包括镜像详情)
	-q								# 只显示镜像ID
docker <cli> --help
docker search <image> [--f=<cli>]	# 镜像搜索 
	--f=<cli>						# 过滤镜像
docker pull <image>					# 下载镜像
docker rmi -f <imgage-id>           # 镜像删除 -f 强制删除
docker rmi -f $(docker imgaes -aq)  # 删除所有镜像
```

## 容器常用命令

```shell
docker ps []                  		# 正在运行中的容器
	-a                        		# 全部容器 + 历史容器
	-n                       		# 最近创建容器
	-q                        		# 只显示容器id
docker run [参数] image /bin/bash    # 运行容器
	--name="custom name"  	  		# 命名
	-p                        		# 指定容器端口
	-p 主机端口:容器端口        	   # 绑定主机端口和容器端口
	-p 容器端口             		  # 指定容器端口
	-it <image>               		# 启动并进入容器内部
		exit                  		# 从容器退出主机 容器停止
		ctrl + q + p          		# 从容器中退出 容器不停止
docker rm -f <docker-id>      		# -f 强制删除
docker rm -f $(docker ps -aq) 		# 删除所有容器
docker ps -aq|xargs docker rm 		# 删除所有容器
docker start <docker-id>			# 启动容器
docker restart <docker-id>			# 重启容器
docker stop <docker-id>				# 关闭容器
docker kill <docker-id>				# 强制关闭容器
```

