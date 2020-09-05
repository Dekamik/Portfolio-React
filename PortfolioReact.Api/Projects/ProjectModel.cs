using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PortfolioReact.Api.Projects
{
    public class ProjectModel
    {
        public string Name { get; set; }
        public string Role { get; set; }
        public string Description { get; set; }
        public string Customer { get; set; }
        public string Employer { get; set; }
        public string[] Technologies { get; set; }
        public DateTime DateFrom { get; set; }
        public DateTime DateTo { get; set; }
        public bool IsHighlighted { get; set; }
        public string Category { get; set; }
    }
}
