namespace SenetServer.Model
{
    public class BoardState
    {
        public List<int> WhitePositions { get; set; }
        public List<int> BlackPositions { get; set; }
        public List<int> Sticks { get; set; } = new List<int>();
        public int SticksValue { get; set; }
        public bool IsWhiteTurn { get; set; } = true;
        public BoardState()
        {
            WhitePositions = new List<int>() { 0, 2, 4, 6, 8 };
            BlackPositions = new List<int>() { 1, 3, 5, 7, 9 };
            RollSticks();
        }
        public void RollSticks()
        {
            Sticks.Clear();
            Random random = new Random();
            for (int i = 0; i < 4; i++)
            {
                Sticks.Add(random.Next(2));
            }
            SticksValue = GetSticksValue();
        }

        public int GetSticksValue()
        {
            switch (Sticks.Count(n => n == 1))
            {
                case 0: return 5;
                case 1: return 1;
                case 2: return 2;
                case 3: return 3;
                case 4: return 4;
            }
            return 0;
        }
    }
}
