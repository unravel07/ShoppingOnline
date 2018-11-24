using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class Product
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Prices { get; set; }
        public string Amount { get; set; }
        public string Description { get; set; }
        public string Picture { get; set; }


    }
}
/*Product
- id : string
- name : string
- price : double
- amount : int
- description : string
- picture : string

Cart
- products : List<Product>
*/
