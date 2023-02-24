class ViewIndex implements IObserver {
  private controler: Controler;

  public constructor(controler: Controler) {
    this.controler = controler;
  }
}