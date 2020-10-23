package Masking;

public class Masking {
    public static void main(String[] args){

    }

    public static byte setBite(byte b, int n){
        return (byte) (b&(1 << n));
    }

    public static boolean readBit(byte b, int n){
       return  (b&(1 << n)) == 0 ? 0 : 1;
    }

}
