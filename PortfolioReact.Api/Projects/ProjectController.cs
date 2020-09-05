using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace PortfolioReact.Api.Projects
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProjectController : ControllerBase
    {

        private readonly ILogger<ProjectController> _logger;

        public ProjectController(ILogger<ProjectController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IActionResult GetProjects()
        {
            IEnumerable<ProjectModel> model = new List<ProjectModel>
            {
                new ProjectModel
                {
                    Name = "AnyProject1",
                    Role = "AnyRole",
                    Description = "AnyDescription",
                    Customer = "AnyCustomer",
                    Technologies = new string[] {"AnyTech1", "AnyTech2" },
                    DateFrom = DateTime.Parse("2020-01-01"),
                    DateTo = DateTime.Parse("2020-02-01"),
                    IsHighlighted = true,
                    Category = "Work",
                    Employer = "AnyEmployer"
                },
                new ProjectModel
                {
                    Name = "AnyProject2",
                    Role = "AnyRole",
                    Description = "AnyDescription",
                    Customer = "AnyCustomer",
                    Technologies = new string[] {"AnyTech1", "AnyTech2" },
                    DateFrom = DateTime.Parse("2020-02-01"),
                    DateTo = DateTime.Parse("2020-03-01"),
                    IsHighlighted = true,
                    Category = "Work",
                    Employer = "AnyEmployer"
                },
                new ProjectModel
                {
                    Name = "AnyProject3",
                    Role = "AnyRole",
                    Description = "AnyDescription",
                    Technologies = new string[] {"AnyTech1", "AnyTech2" },
                    DateFrom = DateTime.Parse("2019-12-01"),
                    DateTo = DateTime.Parse("2020-01-01"),
                    IsHighlighted = true,
                    Category = "Free-time"
                }
            };

            return Ok(model);
        }
    }
}
