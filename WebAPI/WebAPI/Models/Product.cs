﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class Product
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public double Prices { get; set; }
        public int Amount { get; set; }
        public string Description { get; set; }
        public string Picture { get; set; }


    }
}

