{
  "AWS": [
    {
      "Model_name": "NOVA",
      "COMPUTE_NAME": "m5.2xlarge",
      "CPU": "8",
      "RAM": "32 GiB",
      "REASON": "The m5.2xlarge instance type on AWS provides 8 vCPUs and 32 GiB of memory, which is sufficient for the SCCM application. It also includes a 800 GB SSD for storage, and a 10 Gigabit network interface, which is suitable for the application's needs."
    },
    {
      "Model_name": "TITAN",
      "COMPUTE_NAME": "m5.2xlarge",
      "CPU": "8",
      "RAM": "32 GiB",
      "REASON": "The m5.2xlarge instance type on AWS provides 8 vCPUs and 32 GiB of memory, which is sufficient for the SCCM application. It also includes a 800 GB SSD for storage, and a 10 Gigabit network interface, which is suitable for the application's needs."
    },
    {
      "Model_name": "final",
      "COMPUTE_NAME": "m5.2xlarge",
      "CPU": "8",
      "RAM": "32 GiB"
    }
  ],
  "AZURE": [
    {
      "Model_name": "NOVA",
      "COMPUTE_NAME": "Standard_D8s_v3",
      "CPU": "8",
      "RAM": "32 GiB",
      "REASON": "The Standard_D8s_v3 instance type on Azure provides 8 vCPUs and 32 GiB of memory, which meets the requirements. It ensures high-performance networking with a 10 Gigabit network interface."
    },
    {
      "Model_name": "TITAN",
      "COMPUTE_NAME": "Standard_D8s_v3",
      "CPU": "8",
      "RAM": "32 GiB",
      "REASON": "The Standard_D8s_v3 instance type on Azure provides 8 vCPUs and 32 GiB of memory, which is sufficient for the SCCM application. It also includes a 512 GB SSD for storage, and a 10 Gigabit network interface, which is suitable for the application's needs."
    },
    {
      "Model_name": "final",
      "COMPUTE_NAME": "Standard_D8s_v3",
      "CPU": "8",
      "RAM": "32 GiB"
    }
  ],
  "GCP": [
    {
      "Model_name": "CLAUDE",
      "COMPUTE_NAME": "n2-standard-8",
      "CPU": "8",
      "RAM": "32 GB",
      "REASON": "The n2-standard-8 instance on GCP closely matches the specified requirements with 8 vCPUs and 32 GB of memory. It supports up to 800 GB of SSD storage and offers up to 10 Gbps network bandwidth, making it suitable for the SCCM application. This instance type provides a balance of compute, memory, and networking resources that align well with the given specifications."
    },
    {
      "Model_name": "DEEPSEEK",
      "COMPUTE_NAME": null,
      "CPU": null,
      "RAM": null,
      "REASON": null
    },
    {
      "Model_name": "NOVA",
      "COMPUTE_NAME": "n2-standard-8",
      "CPU": "8",
      "RAM": "32 GiB",
      "REASON": "The n2-standard-8 instance type on GCP provides 8 vCPUs and 32 GiB of memory, which matches the requirements. It offers high-performance networking with a 10 Gigabit network interface."
    },
    {
      "Model_name": "TITAN",
      "COMPUTE_NAME": "n1-standard-8",
      "CPU": "8",
      "RAM": "32 GiB",
      "REASON": "The n1-standard-8 instance type on GCP provides 8 vCPUs and 32 GiB of memory, which is sufficient for the SCCM application. It also includes a 475 GB SSD for storage, and a 10 Gigabit network interface, which is suitable for the application's needs."
    },
    {
      "Model_name": "final",
      "COMPUTE_NAME": "n2-standard-8",
      "CPU": "8",
      "RAM": "32 GB"
    }
  ]
}