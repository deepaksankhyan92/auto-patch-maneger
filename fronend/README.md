{
  "AWS": [
    {
      "Model_name": "final",
      "COMPUTE_NAME": "r6i.8xlarge",
      "CPU": "32",
      "RAM": "256 GB"
    }
  ],
  "AZURE": [
    {
      "Model_name": "final",
      "COMPUTE_NAME": "Standard_E32-16s_v5",
      "CPU": "16",
      "RAM": "256 GB"
    }
  ],
  "GCP": [
    {
      "Model_name": "final",
      "COMPUTE_NAME": "n2-highmem-32",
      "CPU": "32",
      "RAM": "256 GB"
    }
  ]
}





{
  "Rationalized App Name": "SCCM",
  "Num_of_cpu": 16,
  "memory in GB": "512",
  "hard_disk": "3308.87 GB",
  "OperatingSystem": "Microsoft Windows Server 2016 Standard",
  "Functionaliy": "Configuration Center Server"
}


Input fields
{
  "total_number_of_users":"100",
  "type_of_workload":"webserver",
  "user_concurrency":"100"
}



if show llm output

{
  "AWS": [
    {
      "Model_name": "CLAUDE",
      "COMPUTE_NAME": "c5.large",
      "CPU": "2 vCPU",
      "RAM": "4 GB",
      "REASON": "The c5.large instance is well-suited for a webserver workload with 100 concurrent users. It offers a good balance of CPU and memory for handling web requests efficiently. The compute-optimized nature of the C5 family is ideal for web serving, and the network performance can handle the expected traffic."
    },
    {
      "Model_name": "DEEPSEEK",
      "COMPUTE_NAME": "m5.xlarge",
      "CPU": "4 vCPUs",
      "RAM": "16 GB",
      "REASON": "Balanced compute/memory for 100 concurrent users. EBS gp3 ensures high IOPS for web content. Network handles HTTP traffic spikes."
    },
    {
      "Model_name": "NOVA",
      "COMPUTE_NAME": "t3.medium",
      "CPU": "2",
      "RAM": "4 GB",
      "REASON": "The t3.medium instance type offers a balance of compute, memory, and network resources suitable for a web server handling 100 concurrent users."
    },
    {
      "Model_name": "TITAN",
      "COMPUTE_NAME": "m5.xlarge",
      "CPU": "4",
      "RAM": "16 GiB",
      "REASON": "m5.xlarge instance type is suitable for webserver workloads with 4 vCPUs and 16 GiB of memory. It provides high network performance with 10 Gbps network bandwidth, and ephemeral SSD storage for fast disk I/O."
    },
    {
      "Model_name": "final",
      "COMPUTE_NAME": "m5.xlarge",
      "CPU": "4 vCPUs",
      "RAM": "16 GB"
    }
  ],
  "AZURE": [
    {
      "Model_name": "CLAUDE",
      "COMPUTE_NAME": "Standard_D2s_v3",
      "CPU": "2 vCPU",
      "RAM": "8 GB",
      "REASON": "The Standard_D2s_v3 instance is suitable for a webserver workload with 100 concurrent users. It offers a balance of CPU and memory similar to the GCP option. The Dsv3-series provides good performance for web applications, and the included temporary SSD can be beneficial for caching or temporary storage needs."
    },
    {
      "Model_name": "DEEPSEEK",
      "COMPUTE_NAME": "D4s v3",
      "CPU": "4 vCPUs",
      "RAM": "16 GB",
      "REASON": "D-series optimized for web workloads. Premium SSD ensures low latency. Accelerated Networking reduces HTTP response times."
    },
    {
      "Model_name": "NOVA",
      "COMPUTE_NAME": "Standard_D2s_v3",
      "CPU": "2",
      "RAM": "8 GB",
      "REASON": "The Standard_D2s_v3 instance type offers a balance of compute, memory, and network resources, making it suitable for a web server with 100 concurrent users."
    },
    {
      "Model_name": "TITAN",
      "COMPUTE_NAME": "Standard_D4_v3",
      "CPU": "4",
      "RAM": "16 GB",
      "REASON": "Standard_D4_v3 instance type is suitable for webserver workloads with 4 vCPUs and 16 GB of memory. It provides high network performance with 25 Gbps network bandwidth, and temporary SSD storage for fast disk I/O."
    },
    {
      "Model_name": "final",
      "COMPUTE_NAME": "Standard_D2s_v3",
      "CPU": "2 vCPU",
      "RAM": "8 GB"
    }
  ],
  "GCP": [
    {
      "Model_name": "CLAUDE",
      "COMPUTE_NAME": "e2-standard-2",
      "CPU": "2 vCPU",
      "RAM": "8 GB",
      "REASON": "The e2-standard-2 instance provides a good balance of CPU and memory for a webserver with 100 concurrent users. It offers slightly more memory than the AWS equivalent, which can be beneficial for caching and handling multiple concurrent connections. The E2 family is cost-effective for general-purpose workloads like web serving."
    },
    {
      "Model_name": "DEEPSEEK",
      "COMPUTE_NAME": "n2-standard-4",
      "CPU": "4 vCPUs",
      "RAM": "16 GB",
      "REASON": "N2's general-purpose balance suits web servers. Persistent Disk SSD accelerates static content. Network supports concurrent connections."
    },
    {
      "Model_name": "NOVA",
      "COMPUTE_NAME": "e2-medium",
      "CPU": "2",
      "RAM": "4 GB",
      "REASON": "The e2-medium instance type provides a good balance of resources for a web server, making it suitable for handling 100 concurrent users."
    },
    {
      "Model_name": "TITAN",
      "COMPUTE_NAME": "n1-standard-4",
      "CPU": "4",
      "RAM": "15 GB",
      "REASON": "n1-standard-4 instance type is suitable for webserver workloads with 4 vCPUs and 15 GB of memory. It provides high network performance with 10 Gbps network bandwidth, and local SSD storage for fast disk I/O."
    },
    {
      "Model_name": "final",
      "COMPUTE_NAME": "e2-standard-2",
      "CPU": "2 vCPU",
      "RAM": "8 GB"
    }
  ]
}





https://d1gcmj7t2xqvsq.cloudfront.net/index.html