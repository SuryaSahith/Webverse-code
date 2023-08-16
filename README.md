terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
      version = "5.12.0"
    }
  }
}

provider "aws"{
    region="ap-south-1"
    access_key="YOUR_ACCESS_KEY"
    secret_key="YOUR_SECRET_KEY"
}

resource "aws_security_group" "op_dashboard_security"{
    name_prefix="instance-sg-"
}

provider "aws_instance" "operational_dashboard" {
    ami="ami-04e042f322e8caea4"
    instance_type="t2.micro"
    security_groups=[aws_security_group.op_dashboard_security.name]
}

resource "aws_security_group_rule" "allow_device_access"{
    count=var.allow_device_access ? 1:0
    type="ingress"
    from_port=22
    to_port=22
    protocol="tcp"
    cidr_blocks=[var.user_device_ip]
    security_group_id= aws_security_group.instance_security_group.id
}

variable "allow_device_access"{
    description="Set to true to allow access,false to deny"
    type =bool
    default=false
}

variable "user_device_ip"{
    description="IP Address of user device"
    type=string
}
