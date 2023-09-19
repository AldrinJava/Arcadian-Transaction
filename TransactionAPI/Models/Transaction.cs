using System.ComponentModel.DataAnnotations;

namespace TransactionAPI.Models
{
    public class AnyTransaction
    {
        public int Id { get; set; }

        [Required]
        [StringLength(200, MinimumLength = 1)]
        public string TransactionName { get; set; }

        [Required]
        public DateTime Date { get; set; }

        [Required]
        [Range(0.01, double.MaxValue)]
        public decimal Cost { get; set; }
    }

}
