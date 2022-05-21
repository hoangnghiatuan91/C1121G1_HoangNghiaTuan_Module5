public class Test {
    public static void main(String[] args) {
        int [] arr = new int [] {1, 1, 7, 3, 2, 2, 2, 4, 1};
        int [] count = new int[arr.length];

        int i,tmp = 0;
boolean flag;
        for(i = 0; i < arr.length; i++){
            tmp = arr[i];
            count[tmp]++;
        }
        for(i=1; i < count.length; i++){
            System.out.println(count[i]);
            if(count[i] > 0 && count[i] == 1){
                System.out.printf("%d occurs %d times\n",i, count[i]);
            }
            else if(count[i] >= 2){
                System.out.printf("%d occurs %d times\n",i, count[i]);
            }
            if(count[i]>=1){
                if(count[i]==count[i+1] && count[i]==count[i+2]){
                    flag = true;
                    System.out.println(flag);
                }
                else flag = false;
                System.out.println(flag);
            }
            }

    }
}
